"use client";
import * as React from "react"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 5000

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString();
}

const toastTimeouts = new Map()

const addToRemoveQueue = (toastId, dispatch) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t),
      };

    case "DISMISS_TOAST": {
      const { toastId } = action

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t),
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
    default:
      return state;
  }
}

function useToast() {
  const [state, dispatch] = React.useReducer(reducer, { toasts: [] })

  const toast = React.useCallback(({ ...props }) => {
    const id = genId()

    const update = (props) =>
      dispatch({
        type: "UPDATE_TOAST",
        toast: { ...props, id },
      })
    
    const dismiss = () => {
      dispatch({ type: "DISMISS_TOAST", toastId: id })
      addToRemoveQueue(id, dispatch)
    }

    dispatch({
      type: "ADD_TOAST",
      toast: {
        ...props,
        id,
        open: true,
        onOpenChange: (open) => {
          if (!open) dismiss()
        },
      },
    })

    return {
      id: id,
      dismiss,
      update,
    }
  }, [])

  const dismiss = React.useCallback((toastId) => {
    dispatch({ type: "DISMISS_TOAST", toastId })
    if (toastId) {
      addToRemoveQueue(toastId, dispatch)
    }
  }, [])

  return {
    ...state,
    toast,
    dismiss,
  };
}

export { useToast }
