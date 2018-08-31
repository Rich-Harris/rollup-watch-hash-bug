export default {
	input: 'src/main.js',
	output: {
		dir: 'dist',
		entryFileNames: '[name].[hash].js',
		chunkFileNames: '[name].[hash].js',
		format: 'es'
	},
	experimentalCodeSplitting: true
};
