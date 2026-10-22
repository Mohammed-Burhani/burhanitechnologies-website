"use client";

import Image from "next/image";
import Link from "next/link";
import { List, X, WhatsappLogo } from "@phosphor-icons/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useAtom } from "jotai";
import { usePathname } from "next/navigation";
import { checkScrollStatus } from "@/store/store";
import {
  companyNavigation,
  industryNavigation,
  primaryNavigation,
  serviceNavigation,
} from "./navigationData";
import styles from "./Navigation.module.css";

const Chevron = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const NavArrow = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
    <path d="M7 17 17 7M7 7h10v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ContactLink = ({ onNavigate }) => (
  <Link href="/contact" className={styles.contactLink} onClick={onNavigate}>
    Book a free consultation<NavArrow />
  </Link>
);

const Destination = ({ link, pathname, onNavigate, compact = false }) => (
  <Link
    href={link.href}
    aria-current={pathname === link.href ? "page" : undefined}
    className={compact ? styles.compactLink : styles.destination}
    onClick={onNavigate}
  >
    <span>{link.label}</span>
    {link.description && <span className={styles.destinationDescription}>{link.description}</span>}
  </Link>
);

const SmallDropdown = ({ label, links, pathname, onNavigate, onToggle, viewAll }) => (
  <details className={styles.smallDisclosure} name="desktop-navigation" onToggle={onToggle}>
    <summary className={styles.navTrigger} data-active={links.some((link) => pathname === link.href) || pathname === viewAll?.href}>
      {label}<Chevron />
    </summary>
    <div className={styles.smallPanel}>
      <ul>
        {links.map((link) => (
          <li key={link.href}><Destination link={link} pathname={pathname} onNavigate={onNavigate} /></li>
        ))}
      </ul>
      {viewAll && <Link href={viewAll.href} className={styles.panelFooterLink} onClick={onNavigate}>{viewAll.label}<NavArrow /></Link>}
    </div>
  </details>
);

/* eslint-disable @next/next/no-html-link-for-pages -- Native fallback links are parsed only when JavaScript is disabled. */
const NoScriptNavigation = ({ pathname }) => (
  <noscript>
    <details className={styles.noScriptNavigation}>
      <summary className={styles.noScriptTrigger}>
        <List size={23} weight="bold" aria-hidden="true" />
        <span className="sr-only">Open navigation</span>
      </summary>
      <nav aria-label="Website navigation" className={styles.noScriptPanel}>
        <ul className={styles.mobileList}>
          <li><a href="/" className={styles.mobileDirect} aria-current={pathname === "/" ? "page" : undefined}>Home</a></li>
          <li>
            <details className={styles.mobileSection} name="fallback-navigation">
              <summary>Why Burhani<Chevron /></summary>
              <ul className={styles.mobileDestinations}>
                {companyNavigation.map((link) => <li key={link.href}><a href={link.href} className={styles.destination}>{link.label}</a></li>)}
              </ul>
            </details>
          </li>
          <li>
            <details className={styles.mobileSection} name="fallback-navigation">
              <summary>Services<Chevron /></summary>
              <a href="/services" className={styles.mobileViewAll}>View all services<NavArrow /></a>
              <div className={styles.mobileServiceGroups}>
                {serviceNavigation.map((group) => (
                  <details className={styles.mobileGroup} key={group.label}>
                    <summary>{group.label}<Chevron /></summary>
                    <ul className={styles.mobileDestinations}>
                      {group.links.map((link) => <li key={link.href}><a href={link.href} className={styles.compactLink} aria-current={pathname === link.href ? "page" : undefined}>{link.label}</a></li>)}
                    </ul>
                  </details>
                ))}
              </div>
            </details>
          </li>
          <li>
            <details className={styles.mobileSection} name="fallback-navigation">
              <summary>Industries<Chevron /></summary>
              <ul className={styles.mobileDestinations}>
                {industryNavigation.map((link) => <li key={link.href}><a href={link.href} className={styles.destination}>{link.label}</a></li>)}
              </ul>
              <a href="/industries" className={styles.mobileViewAll}>View all industries<NavArrow /></a>
            </details>
          </li>
          {primaryNavigation.map((link) => <li key={link.href}><a href={link.href} className={styles.mobileDirect} aria-current={pathname === link.href ? "page" : undefined}>{link.label}</a></li>)}
          <li><a href="/contact" className={styles.contactLink}>Book a free consultation<NavArrow /></a></li>
        </ul>
      </nav>
    </details>
  </noscript>
);
/* eslint-enable @next/next/no-html-link-for-pages */

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useAtom(checkScrollStatus);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const desktopNavRef = useRef(null);
  const mobileDialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const hasDarkHero = pathname === "/" || /^\/(services|industries|authors|case-studies)(\/|$)/.test(pathname) || ["/about", "/leadership", "/values", "/why-choose-us", "/contact", "/book-a-consultation", "/privacy-policy", "/terms-of-service", "/thank-you"].includes(pathname);
  const isDarkSurface = hasDarkHero && !isScrolled;

  const closeDesktopMenus = useCallback((except) => {
    desktopNavRef.current?.querySelectorAll("details[open]").forEach((disclosure) => {
      if (disclosure !== except) disclosure.open = false;
    });
  }, []);
  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);
  const onNavigate = useCallback(() => {
    closeDesktopMenus();
    closeMobileMenu();
  }, [closeDesktopMenus, closeMobileMenu]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname, setIsScrolled]);

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!desktopNavRef.current?.contains(event.target)) closeDesktopMenus();
    };
    const handleFocus = (event) => {
      desktopNavRef.current?.querySelectorAll("details[open]").forEach((disclosure) => {
        if (!disclosure.contains(event.target)) disclosure.open = false;
      });
    };
    const handleKeyDown = (event) => {
      if (event.key !== "Escape" || mobileDialogRef.current?.open) return;
      const disclosure = desktopNavRef.current?.querySelector("details[open]");
      if (disclosure) {
        event.preventDefault();
        closeDesktopMenus();
        disclosure.querySelector("summary")?.focus();
      }
    };
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("focusin", handleFocus);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("focusin", handleFocus);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeDesktopMenus]);

  useEffect(() => {
    onNavigate();
  }, [pathname, onNavigate]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const dialog = mobileDialogRef.current;
    if (!dialog) return;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (scrollbarWidth > 0) {
      const currentPadding = parseFloat(window.getComputedStyle(document.body).paddingRight) || 0;
      document.body.style.paddingRight = `${currentPadding + scrollbarWidth}px`;
    }
    document.body.style.overflow = "hidden";
    if (!dialog.open) dialog.showModal();
    closeButtonRef.current?.focus();
    const desktopViewport = window.matchMedia("(min-width: 1280px)");
    const handleViewportChange = (event) => { if (event.matches) closeMobileMenu(); };
    desktopViewport.addEventListener("change", handleViewportChange);
    return () => {
      desktopViewport.removeEventListener("change", handleViewportChange);
      if (dialog.open) dialog.close();
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected && previousFocus.getClientRects().length) {
        previousFocus.focus({ preventScroll: true });
      }
    };
  }, [isMobileMenuOpen, closeMobileMenu]);

  const onDesktopToggle = (event) => {
    if (event.currentTarget.open) closeDesktopMenus(event.currentTarget);
  };
  const openMobileMenu = () => {
    closeDesktopMenus();
    setIsMobileMenuOpen(true);
  };
  const onDialogClick = (event) => {
    if (event.target !== event.currentTarget) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) closeMobileMenu();
  };
  const onDialogKeyDown = (event) => {
    if (event.key !== "Tab" || event.defaultPrevented) return;
    const dialog = event.currentTarget;
    const focusable = Array.from(dialog.querySelectorAll("a[href], button, summary, [tabindex]")).filter((element) => {
      if (element.tabIndex < 0 || element.hasAttribute("disabled") || !element.getClientRects().length || getComputedStyle(element).visibility === "hidden") return false;
      // Closed disclosures expose their summary, but none of their child links.
      for (let ancestor = element.parentElement; ancestor && ancestor !== dialog; ancestor = ancestor.parentElement) {
        if (ancestor.tagName === "DETAILS" && !ancestor.open && ancestor.querySelector(":scope > summary") !== element) return false;
      }
      return true;
    });
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (!first) return;
    const outside = !dialog.contains(document.activeElement);
    if (event.shiftKey && (document.activeElement === first || outside)) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && (document.activeElement === last || outside)) {
      event.preventDefault();
      first.focus();
    }
  };
  const sectionActive = (href) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className={`${styles.header} ${isDarkSurface ? styles.dark : styles.light}`}>
      <div className={styles.headerInner}>
        <Link href="/" aria-label="Burhani Technologies home" className={styles.logo} onClick={onNavigate}>
          <Image alt="Burhani Technologies" width={180} height={44} priority src="/BT-Logo.svg" />
        </Link>
        <nav aria-label="Main navigation" className={styles.desktopNav} ref={desktopNavRef}>
          <ul className={styles.primaryList}>
            <li><Link href="/" aria-current={pathname === "/" ? "page" : undefined} className={styles.navLink} onClick={onNavigate}>Home</Link></li>
            <li><SmallDropdown label="Why Burhani" links={companyNavigation} pathname={pathname} onNavigate={onNavigate} onToggle={onDesktopToggle} /></li>
            <li>
              <details className={styles.megaDisclosure} name="desktop-navigation" onToggle={onDesktopToggle}>
                <summary className={styles.navTrigger} data-active={sectionActive("/services")}>Services<Chevron /></summary>
                <div className={styles.megaPanel}>
                  <div className={styles.panelIntro}>
                    <div><p className={styles.eyebrow}>What do you need to build?</p><p className={styles.panelTitle}>Find the right starting point.</p></div>
                    <Link href="/services" className={styles.allServicesLink} onClick={onNavigate}>View all services<NavArrow /></Link>
                  </div>
                  <div className={styles.serviceGrid}>
                    {serviceNavigation.map((group) => (
                      <section className={styles.serviceGroup} key={group.label} aria-label={group.label}>
                        <h2>{group.label}</h2><p>{group.description}</p>
                        <ul>{group.links.map((link) => <li key={link.href}><Destination link={link} pathname={pathname} onNavigate={onNavigate} compact /></li>)}</ul>
                      </section>
                    ))}
                  </div>
                  <div className={styles.megaFooter}><span>See how the work comes together.</span><Link href="/case-studies" onClick={onNavigate}>Explore client projects<NavArrow /></Link></div>
                </div>
              </details>
            </li>
            <li><SmallDropdown label="Industries" links={industryNavigation} pathname={pathname} onNavigate={onNavigate} onToggle={onDesktopToggle} viewAll={{ href: "/industries", label: "View all industries" }} /></li>
            {primaryNavigation.map((link) => <li key={link.href}><Link href={link.href} aria-current={pathname === link.href ? "page" : undefined} data-active={sectionActive(link.href)} className={styles.navLink} onClick={onNavigate}>{link.label}</Link></li>)}
          </ul>
        </nav>
        <div className={styles.headerActions}>
          <div className={styles.desktopContact}><ContactLink onNavigate={onNavigate} /></div>
          <a href="https://wa.me/917299002152" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className={styles.mobileWhatsApp}><WhatsappLogo size={24} weight="regular" aria-hidden="true" /></a>
          <button type="button" onClick={openMobileMenu} aria-label="Open navigation" aria-haspopup="dialog" aria-controls="mobile-navigation" aria-expanded={isMobileMenuOpen} className={styles.mobileButton}><List size={23} weight="bold" /></button>
          <NoScriptNavigation pathname={pathname} />
        </div>
      </div>
      <dialog id="mobile-navigation" ref={mobileDialogRef} aria-labelledby="mobile-navigation-title" className={styles.mobileDialog} onCancel={(event) => { event.preventDefault(); closeMobileMenu(); }} onClose={closeMobileMenu} onClick={onDialogClick} onKeyDown={onDialogKeyDown}>
        <div className={styles.mobileHeader}>
          <Link href="/" aria-label="Burhani Technologies home" onClick={onNavigate}><Image alt="Burhani Technologies" width={160} height={40} src="/BT-Logo.svg" /></Link>
          <button ref={closeButtonRef} type="button" onClick={closeMobileMenu} aria-label="Close navigation" className={styles.closeButton}><X size={23} weight="bold" /></button>
        </div>
        <div className={styles.mobileContent}>
          <p id="mobile-navigation-title" className={styles.mobileTitle}>Explore Burhani</p>
          <nav aria-label="Mobile navigation">
            <ul className={styles.mobileList}>
              <li><Link href="/" className={styles.mobileDirect} aria-current={pathname === "/" ? "page" : undefined} onClick={onNavigate}>Home</Link></li>
              <li><details className={styles.mobileSection} name="mobile-navigation-section"><summary data-active={companyNavigation.some((link) => pathname === link.href)}>Why Burhani<Chevron /></summary><ul className={styles.mobileDestinations}>{companyNavigation.map((link) => <li key={link.href}><Destination link={link} pathname={pathname} onNavigate={onNavigate} /></li>)}</ul></details></li>
              <li>
                <details className={styles.mobileSection} name="mobile-navigation-section">
                  <summary data-active={sectionActive("/services")}>Services<Chevron /></summary>
                  <Link href="/services" className={styles.mobileViewAll} onClick={onNavigate}>View all services<NavArrow /></Link>
                  <div className={styles.mobileServiceGroups}>
                    {serviceNavigation.map((group) => <details className={styles.mobileGroup} name="mobile-service-group" key={group.label}><summary data-active={group.links.some((link) => pathname === link.href)}>{group.label}<Chevron /></summary><ul className={styles.mobileDestinations}>{group.links.map((link) => <li key={link.href}><Destination link={link} pathname={pathname} onNavigate={onNavigate} compact /></li>)}</ul></details>)}
                  </div>
                </details>
              </li>
              <li><details className={styles.mobileSection} name="mobile-navigation-section"><summary data-active={sectionActive("/industries")}>Industries<Chevron /></summary><ul className={styles.mobileDestinations}>{industryNavigation.map((link) => <li key={link.href}><Destination link={link} pathname={pathname} onNavigate={onNavigate} /></li>)}</ul><Link href="/industries" className={styles.mobileViewAll} onClick={onNavigate}>View all industries<NavArrow /></Link></details></li>
              {primaryNavigation.map((link) => <li key={link.href}><Link href={link.href} aria-current={pathname === link.href ? "page" : undefined} data-active={sectionActive(link.href)} className={styles.mobileDirect} onClick={onNavigate}>{link.label}</Link></li>)}
            </ul>
          </nav>
        </div>
        <div className={styles.mobileFooter}><p>Have a business workflow in mind?</p><ContactLink onNavigate={onNavigate} /></div>
      </dialog>
    </header>
  );
};

export default Navbar;
