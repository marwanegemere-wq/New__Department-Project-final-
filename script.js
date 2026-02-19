// ===================================================
// Marwan Shop | Futuristic JavaScript (Black & Blue)
// يتكامل مع CSS و HTML لموقع تقني متطور
// الوظائف: سلة تسوق، معلومات المنتج، بحث، تبديل الثيم، تفاعلات
// ===================================================

(function() {
  // ---------- بيانات المنتجات (نفس البيانات مع صور حقيقية) ----------
  const products = [
    { id: 1, name: 'MacBook Pro 14"', category: 'Computer', price: 1999,
      image: 'https://media.cnn.com/api/v1/images/stellar/prod/230125131405-macbook-pro-14-inch-2023-review-cnnu-7.jpg?c=16x9&q=h_720,w_1280,c_fill',
      images: [
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&auto=format&fit=crop',
        'https://media.cnn.com/api/v1/images/stellar/prod/230125131405-macbook-pro-14-inch-2023-review-cnnu-7.jpg?c=16x9&q=h_720,w_1280,c_fill'
      ],
      specs: {
        processor: 'Apple M2 Pro (10-core)',
        memory: '16GB unified',
        storage: '512GB SSD',
        display: '14.2" Liquid Retina XDR',
        battery: 'Up to 18 hours',
        weight: '3.5 lbs'
      },
      description: 'Apple M2 Pro chip, 16GB RAM, 512GB SSD, 14" Liquid Retina XDR display.'
    },
    { id: 2, name: 'Dell XPS 13 Plus', category: 'Computer', price: 1399,
      image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=300&auto=format&fit=crop',
      images: [
        'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIF.szhyNZNtWWXFQJhf8c1ECA%3Fcb%3Ddefcachec2%26pid%3DApi&sp=1771360795Tcda00912aa6e57346f2117b842f8ca809279fc9b95cb197ac1d208ab13b07b3b',
        'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=300&auto=format&fit=crop',
        'https://www.fredzone.org/wp-content/uploads/2023/05/Dell-XPS-13-Plus-Credit-Dell-scaled.jpg'
      ],
      specs: {
        processor: 'Intel Core i7-1260P',
        memory: '16GB LPDDR5',
        storage: '512GB PCIe SSD',
        display: '13.4" 3.5K OLED',
        battery: 'Up to 12 hours',
        weight: '2.7 lbs'
      },
      description: '12th Gen Intel Core i7, 16GB RAM, 512GB SSD, 13.4" OLED touch.'
    },
    { id: 3, name: 'iPhone 15 Pro', category: 'Phone', price: 1099,
      image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=300&auto=format&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=300&auto=format&fit=crop',
        'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.2JaD-ZKM-Li_p-DHPk7qAwHaJ4%3Fcb%3Ddefcache2%26pid%3DApi%26defcache%3D1&sp=1771337983T54086e65ded4454d6bbdf036c2ce467a51419dda753b6db3f618e8e2f5f98d3a',
        'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fwww.zdnet.com%2Fa%2Fimg%2Fresize%2F3a700db2a52577751185dc0d5f78ef8e10a65981%2F2023%2F09%2F13%2F750409b0-0d4e-4bc9-90f2-16565bae042c%2Fiphone-15-pro-max-white-1.jpg%3Fauto%3Dwebp%26width%3D1280&sp=1771337983T6bcdd510f5183cea027bf10e14ac290a107d18b76dd868434d9d186956d1b638'
      ],
      specs: {
        processor: 'Apple A17 Pro',
        memory: '8GB RAM',
        storage: '256GB',
        camera: '48MP + 12MP + 12MP',
        battery: 'Up to 23h video',
        display: '6.1" Super Retina XDR'
      },
      description: 'A17 Pro chip, 48MP main camera, titanium design.'
    },
    { id: 4, name: 'Samsung Galaxy S24', category: 'Phone', price: 999,
      image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=300&auto=format&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=300&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=300&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=300&auto=format&fit=crop'
      ],
      specs: {
        processor: 'Snapdragon 8 Gen 3',
        memory: '8GB RAM',
        storage: '256GB',
        camera: '50MP + 12MP + 10MP',
        battery: '4000 mAh',
        display: '6.2" FHD+ Dynamic AMOLED'
      },
      description: 'Snapdragon 8 Gen 3, 120Hz Dynamic AMOLED.'
    },
    { id: 5, name: 'Apple Watch Ultra 2', category: 'Watch', price: 799,
      image: 'https://images.macrumors.com/t/AM_OSYw78kYLvztx79sQJBrnmTA=/800x0/article-new/2024/09/apple-watch-ultra-2-new-black.jpg?lossy',
      images: [
        'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fwww.letemsvetemapplem.eu%2Fwp-content%2Fuploads%2F2023%2F08%2FApple-Watch-Ultra-2-black.jpeg&sp=1771338085Tb7af08a8bc8c900bfff6d7bddaf82f4383a90e4e5626ace678b1b692edf38ae9',
        'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.n3tUjNCkfJR-JvCcqb15NwHaEK%3Fpid%3DApi&sp=1771338196Tad2c2168d689751771d5e0a8c2d1934ac64a27ae21df307cdffe7bda3f2ad2fd',
        'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.AuTY6G-QR_cBxWRvjVJlewHaE8%3Fpid%3DApi&sp=1771338196T0fb245679b842471d739aa5e3e291894d23beb3fded9cf783d185f43819b6cb2'
      ],
      specs: {
        processor: 'S9 SiP',
        display: 'Always‑On Retina (3000 nits)',
        battery: 'Up to 36h',
        water: '100m',
        sensors: 'ECG, blood oxygen',
        connectivity: 'LTE, Bluetooth 5.3'
      },
      description: '49mm titanium case, dual‑frequency GPS.'
    },
    { id: 6, name: 'Galaxy Watch6 Classic', category: 'Watch', price: 399,
      image: 'https://www.techadvisor.com/wp-content/uploads/2023/07/Galaxy-Watch-6-Classic-review_3-4.jpg?quality=50&strip=all',
      images: [
        'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=300&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=300&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=300&auto=format&fit=crop'
      ],
      specs: {
        processor: 'Exynos W930',
        display: '1.5" Super AMOLED',
        battery: 'Up to 40h',
        water: '5ATM + IP68',
        sensors: 'HR, ECG, BIA',
        connectivity: 'Bluetooth 5.3, GPS'
      },
      description: '47mm stainless steel, rotating bezel.'
    }
  ];

  // ---------- متغيرات الحالة (السلة) ----------
  let cart = [];

  // ---------- العناصر الرئيسية في DOM ----------
  const productContainer = document.getElementById('productListContainer');
  const cartItemsDiv = document.getElementById('cartItemsContainer');
  const cartTotalSpan = document.querySelector('#cartTotal span:last-child');
  const cartCountSpan = document.getElementById('cartCount');
  const modalOverlay = document.getElementById('infoModal');
  const modalContent = document.getElementById('modalContent');
  const modalClose = document.getElementById('modalClose');
  const themeToggle = document.getElementById('themeToggle');
  const searchInput = document.getElementById('searchInput');

  // ---------- تهيئة الإغلاق للنافذة المنبثقة ----------
  modalClose.addEventListener('click', () => { modalOverlay.style.display = 'none'; });
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) modalOverlay.style.display = 'none';
  });

  // ---------- دالة عرض معلومات المنتج ----------
  function showProductInfo(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    // إنشاء صور HTML
    const imagesHtml = product.images.map(url => `<img src="${url}" alt="${product.name}">`).join('');

    // إنشاء المواصفات HTML
    const specsHtml = Object.entries(product.specs)
      .map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`)
      .join('');

    // حقن المحتوى
    modalContent.innerHTML = `
      <div class="modal-title">${product.name}</div>
      <div class="modal-images">${imagesHtml}</div>
      <div class="modal-specs">${specsHtml}</div>
      <p style="margin-top:1rem;">${product.description}</p>
    `;
    modalOverlay.style.display = 'flex';
  }

  // ---------- دوال السلة ----------
  function renderCart() {
    if (cart.length === 0) {
      cartItemsDiv.innerHTML = `<div class="empty-cart-msg"><i class="fas fa-box-open"></i> void — cart empty</div>`;
    } else {
      let html = '';
      cart.forEach(item => {
        html += `
          <div class="cart-item" data-cart-id="${item.id}">
            <div class="cart-item-info">
              <span class="cart-item-name">${item.name}</span>
              <span class="cart-item-price">$${item.price}</span>
            </div>
            <div class="cart-item-actions">
              <button class="cart-qty-btn" data-action="decr" data-id="${item.id}"><i class="fas fa-minus"></i></button>
              <span class="cart-item-qty">${item.quantity}</span>
              <button class="cart-qty-btn" data-action="incr" data-id="${item.id}"><i class="fas fa-plus"></i></button>
              <button class="cart-qty-btn remove-btn" data-action="remove" data-id="${item.id}"><i class="fas fa-trash"></i> remove</button>
            </div>
          </div>
        `;
      });
      cartItemsDiv.innerHTML = html;
    }

    // تحديث الإجمالي وعدد العناصر
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotalSpan.innerText = total;
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountSpan.innerText = itemCount;

    // تأثير النبض على السلة إذا كان بها عناصر
    const cartSummary = document.querySelector('.cart-summary');
    if (itemCount > 0) {
      cartSummary.classList.add('has-items');
    } else {
      cartSummary.classList.remove('has-items');
    }
  }

  function addToCart(product) {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ id: product.id, name: product.name, price: product.price, quantity: 1 });
    }
    renderCart();
  }

  function incrementItem(id) {
    const item = cart.find(i => i.id === id);
    if (item) {
      item.quantity++;
      renderCart();
    }
  }

  function decrementItem(id) {
    const item = cart.find(i => i.id === id);
    if (!item) return;
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      cart = cart.filter(i => i.id !== id);
    }
    renderCart();
  }

  function removeItem(id) {
    cart = cart.filter(i => i.id !== id);
    renderCart();
  }

  // ---------- دالة عرض المنتجات ----------
  function renderProducts() {
    const categories = ['Computer', 'Phone', 'Watch'];
    let html = '';

    categories.forEach(cat => {
      const catProducts = products.filter(p => p.category === cat);
      if (catProducts.length === 0) return;

      let iconClass = cat === 'Computer' ? 'fa-laptop' : (cat === 'Phone' ? 'fa-mobile-alt' : 'fa-clock');

      html += `<div class="category-block">`;
      html += `<div class="category-title"><i class="fas ${iconClass}"></i> ${cat}s</div>`;
      html += `<div class="product-grid">`;

      catProducts.forEach(prod => {
        html += `
          <div class="product-card" data-product-id="${prod.id}">
            <span class="badge-3d">3D DESIGN</span>
            <div class="product-image-container">
              <img class="product-image" src="${prod.image}" alt="${prod.name}" loading="lazy">
            </div>
            <div class="product-name">${prod.name}</div>
            <span class="product-category">${prod.category}</span>
            <div class="product-price">${prod.price}</div>
            <button class="info-btn" data-id="${prod.id}"><i class="fas fa-info-circle"></i> DEVICE INFO</button>
            <button class="add-to-cart-btn" data-id="${prod.id}"><i class="fas fa-cart-plus"></i> ADD TO CART</button>
          </div>
        `;
      });

      html += `</div></div>`;
    });

    productContainer.innerHTML = html;
  }

  // ---------- البحث (فلترة) ----------
  function filterProducts(searchTerm) {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
      const name = card.querySelector('.product-name').textContent.toLowerCase();
      if (name.includes(searchTerm.toLowerCase())) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  searchInput.addEventListener('input', (e) => filterProducts(e.target.value));

  // ---------- تبديل الثيم (فاتح/داكن) مع الحفاظ على التوهج الأزرق ----------
  themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('light-theme');
    const isLight = document.documentElement.classList.contains('light-theme');

    if (isLight) {
      // الوضع الفاتح: خلفية فاتحة مع لمسات زرقاء
      document.documentElement.style.setProperty('--bg-page', '#f0f5ff');
      document.documentElement.style.setProperty('--text-primary', '#0a0a0f');
      document.documentElement.style.setProperty('--border-color', '#0066ff');
      themeToggle.innerHTML = '<i class="fas fa-sun"></i> <span>Light</span>';
    } else {
      // الوضع الداكن: العودة للأسود والأزرق
      document.documentElement.style.removeProperty('--bg-page');
      document.documentElement.style.removeProperty('--text-primary');
      document.documentElement.style.removeProperty('--border-color');
      themeToggle.innerHTML = '<i class="fas fa-moon"></i> <span>Dark</span>';
    }
  });

  // ---------- تفعيل الأحداث بعد تحميل المنتجات ----------
  function attachEvents() {
    // أحداث أزرار المعلومات والإضافة (باستخدام delegation على container)
    productContainer.addEventListener('click', (e) => {
      const infoBtn = e.target.closest('.info-btn');
      if (infoBtn) {
        const prodId = parseInt(infoBtn.dataset.id);
        showProductInfo(prodId);
      }

      const addBtn = e.target.closest('.add-to-cart-btn');
      if (addBtn) {
        const prodId = parseInt(addBtn.dataset.id);
        const product = products.find(p => p.id === prodId);
        if (product) addToCart(product);
      }
    });

    // أحداث السلة (زيادة، نقصان، حذف)
    cartItemsDiv.addEventListener('click', (e) => {
      const btn = e.target.closest('button');
      if (!btn) return;

      const action = btn.dataset.action;
      const id = parseInt(btn.dataset.id);

      if (action === 'incr') incrementItem(id);
      else if (action === 'decr') decrementItem(id);
      else if (action === 'remove') removeItem(id);
    });

    // زر الدفع (محاكاة)
    document.getElementById('checkoutBtn').addEventListener('click', () => {
      if (cart.length === 0) {
        alert('🛸 Cart is empty!');
      } else {
        const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
        alert(`💰 Total: $${total} — Thank you for shopping at Marwan Shop!`);
      }
    });
  }

  // ---------- تحميل الصور مع تأثير Skeleton (اختياري) ----------
  function applySkeleton() {
    const images = document.querySelectorAll('.product-image');
    images.forEach(img => {
      img.classList.add('skeleton');
      img.addEventListener('load', () => img.classList.remove('skeleton'));
      // إذا كانت الصورة مخزنة في الكاش، قد لا يحدث load، نستخدم كاش بسيط
      if (img.complete) img.classList.remove('skeleton');
    });
  }

  // ---------- بدء التطبيق ----------
  renderProducts();
  renderCart();
  attachEvents();

  // بعد إضافة المنتجات للصفحة، نطبق Skeleton
  setTimeout(applySkeleton, 100); // تأخير صغير للتأكد من وجود الصور في DOM

  // إعادة تطبيق Skeleton عند تغيير البحث (لأن الصور قد تختفي/تظهر)
  searchInput.addEventListener('input', () => setTimeout(applySkeleton, 200));

})();