const { helloMessage } = require('./index');

const assert = require('assert');

try {
    console.log("Memulai pengujian fungsi helloMessage()...");
    
    assert.strictEqual(helloMessage(), "Hello World dari Kelompok 5!");
    
    console.log("✓ Pengujian Sukses: Teks sesuai dengan ekspektasi.");
    process.exit(0); 
} catch (error) {
    console.error("✕ Pengujian Gagal: Teks tidak sesuai!");
    console.error(error.message);
    process.exit(1); 
}