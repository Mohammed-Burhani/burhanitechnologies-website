/** @type {import('tailwindcss').Config} */
const config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	screens: {
  		xsm: '290px',
  		xxs: '359px',
  		xs: '430px',
  		sxm: '576px',
  		sm: '640px',
  		md: '768px',
  		lg: '1023px',
  		sxl: '1024px',
  		xl: '1280px',
  		'2xl': '1360px',
  		'3xl': '1400px',
  		'4xl': '1440px',
  		'5xl': '1600px',
  		'6xl': '1680px',
  		'7xl': '1920px',
  		Sxl: '3840px'
  	},
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			inter: [
  				'var(--font-inter)'
  			]
  		},
  		fontSize: {
  			smallText: 'clamp(0.75rem, 0.75rem + 0vw, 0.75rem)',
  			body: 'clamp(0.875rem, 0.7647rem + 0.9902vw, 1rem)',
  			button: 'clamp(1rem, 0.8897rem + 0.6902vw, 1.125rem)',
  			captionSmall: 'clamp(1.25rem, 1.2397rem + 0.4902vw, 1.375rem)',
  			captionLarge: 'clamp(1.5rem, 1.3794rem + 0.9804vw, 1.75rem)',
  			subTitle: 'clamp(2.5rem, 1.7176rem + 3.9216vw, 3.5rem)',
  			title: 'clamp(3.5rem, 2.7176rem + 3.9216vw, 4.5rem)',
  			largeTitle: 'clamp(6rem, 4.225rem + 8.2333vw, 8.125rem)',
  			xlTitle: 'clamp(7.75rem, 5.7544rem + 9.3137vw, 10.125rem)',
  			mdsmallText: 'clamp(0.75rem, 0.6071rem + 0.2976vw, 0.875rem)',
  			mdbody: 'clamp(1rem, 0.8571rem + 0.2976vw, 1.125rem)',
  			mdbutton: 'clamp(1.125rem, 0.9821rem + 0.2976vw, 1.25rem)',
  			mdcaptionSmall: 'clamp(1.375rem, 1.2321rem + 0.2976vw, 1.5rem)',
  			mdcaptionLarge: 'clamp(1.75rem, 1.4643rem + 0.5952vw, 2rem)',
  			mdsubTitle: 'clamp(3.5rem, 2.9286rem + 1.1905vw, 4rem)',
  			mdtitle: 'clamp(4.5rem, 3.3571rem + 2.381vw, 5.5rem)',
  			mdlargeTitle: 'clamp(8.125rem, 5.9821rem + 4.4643vw, 10rem)',
  			mdxlTitle: 'clamp(10.125rem, 7.4107rem + 5.6548vw, 12.5rem)',
  			lgsmallText: 'clamp(0.875rem, -1.75rem + 2.9167vw, 1.75rem)',
  			lgbody: 'clamp(1.125rem, 0.375rem + 1.6667vw, 1.5rem)',
  			lgbutton: 'clamp(1.25rem, 0.125rem + 1.25vw, 1.625rem)',
  			lgcaptionSmall: 'clamp(1.5rem, 0.1875rem + 1.4583vw, 1.9375rem)',
  			lgcaptionLarge: 'clamp(2rem, 0.125rem + 2.0833vw, 2.625rem)',
  			lgsubTitle: 'clamp(4rem, 0.4375rem + 3.9583vw, 5.1875rem)',
  			lgtitle: 'clamp(5.5rem, 0.625rem + 5.4167vw, 7.125rem)',
  			lglargeTitle: 'clamp(10rem, 1rem + 10vw, 13rem)',
  			lgxlTitle: 'clamp(12.5rem, 1.25rem + 12.5vw, 16.25rem)',
  			xlsmallText: 'clamp(1.125rem, 0.6875rem + 0.3646vw, 1.5625rem)',
  			xlbody: 'clamp(1.625rem, 1.0625rem + 0.4688vw, 2.1875rem)',
  			xlbutton: 'clamp(1.625rem, 1.0625rem + 0.4688vw, 2.1875rem)',
  			xlcaptionSmall: 'clamp(1.9375rem, 1.25rem + 0.5729vw, 2.625rem)',
  			xlcaptionLarge: 'clamp(2.625rem, 1.75rem + 0.7292vw, 3.5rem)',
  			xlsubTitle: 'clamp(5.1875rem, 3.375rem + 1.5104vw, 7rem)',
  			xltitle: 'clamp(7.125rem, 4.625rem + 2.0833vw, 9.625rem)',
  			xllargeTitle: 'clamp(13rem, 8.5rem + 3.75vw, 17.5rem)',
  			xlxlTitle: 'clamp(16.25rem, 10.625rem + 4.6875vw, 21.875rem)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
