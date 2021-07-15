export default function (context) {
	// Tambah properti userAgent dalam konteks (tersedia dalam `data` dan `fetch`)
	context.userAgent = process.server
		? context.req.headers['user-agent']
		: navigator.userAgent
}
