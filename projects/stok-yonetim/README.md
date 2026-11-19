# StokPilot — Stok Yönetim Paneli

Portfolyo kapsamında geliştirilen, ürün envanteri ve stok takibi için hazırlanmış responsive demo uygulaması.

## Özellikler
- Toplam ürün, stok adedi, tahmini stok maliyeti ve kritik stok KPI'ları
- Ürün ekleme, düzenleme ve silme (CRUD)
- Ürün adı ve SKU üzerinden arama
- Kategori ve stok durumuna göre filtreleme
- Minimum stok seviyesine göre kritik stok uyarıları
- Kategori bazlı stok dağılımı
- Ürün listesini CSV olarak dışa aktarma
- LocalStorage ile tarayıcıda veri saklama
- Mobil uyumlu yönetim paneli

## Çalıştırma
Herhangi bir build aracı veya sunucu gerektirmez. `index.html` dosyasını tarayıcıda açabilir ya da GitHub Pages/Vercel gibi statik hosting servislerinde yayınlayabilirsin.

## Teknolojiler
HTML5, CSS3, Vanilla JavaScript, LocalStorage.

## Kapsam ve veri notu
Bu sürüm bir frontend prototipidir. Veriler örnek/demo verileridir ve yalnızca kullanıcının tarayıcısında saklanır. Gerçek kullanıcı hesabı, sunucu, çok kullanıcılı erişim, kalıcı merkezi veritabanı veya gerçek satış entegrasyonu içermez. Stok değeri, girilen birim maliyet ile stok adedinin çarpımıdır.

## Geliştirme fikirleri
- Backend API ve veritabanı entegrasyonu
- Kullanıcı rolleri ve kimlik doğrulama
- Stok giriş/çıkış hareket geçmişi
- Satış siparişleri ve raporlama
- Tarih aralığına göre grafikler
