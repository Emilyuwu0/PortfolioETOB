/** /** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			"pink-soft-color": "#F7D0D1",
			'beige-soft-color': "#F7D0D1",
			'pink-light-color': " #FFF9F9",
			'beige-light-color': "#FFF5ED",
			"beige-dark":"#edc9ac",
			"beige-light":"#f7f3f0",
			"gray-light":"#E6E6E6",
			"black": "#000",
			"white":"#fff"
		  },
		extend: {
			backgroundImage: {
				'about-pattern': "url('/src/assets/bg_about_me.png')",
				'bg-project':"url('/src/assets/bg-projects.png')",
				'bg-contact':"url('/src/assets/bg-contact.png')",
			  }
		},
	},
	plugins: [],
}
