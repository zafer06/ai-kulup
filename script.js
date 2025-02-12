function renderContent(data) {
    const contentDiv = document.getElementById("content");

    data.forEach(item => {
        // List item (li) oluşturuluyor
        const listItem = document.createElement("li");
        listItem.classList.add("flex", "items-center", "justify-between", "bg-white", "shadow-md", "rounded-lg", "p-4");

        // Sol kısım içeriği
        const leftDiv = document.createElement("div");
        leftDiv.classList.add("flex", "items-center", "gap-4", "min-w-0");

        // İçerik div'i
        const contentDivElement = document.createElement("div");
        contentDivElement.classList.add("min-w-0");

        // Başlık
        const titleElement = document.createElement("h3");
        titleElement.classList.add("text-lg", "font-semibold", "truncate");
        titleElement.textContent = item.name;

        // Açıklama
        const descriptionElement = document.createElement("p");
        descriptionElement.classList.add("text-gray-600", "text-sm");
        descriptionElement.textContent = item.description;

        // Ekleme tarihi
        const createdAtElement = document.createElement("span");
        createdAtElement.classList.add("text-gray-500", "text-xs", "mr-2");
        createdAtElement.textContent = `Eklendi: ${item.created_at}`;

        // Bağlantı
        const linkElement = document.createElement("a");
        linkElement.href = item.link;
        linkElement.target = "_blank";
        linkElement.classList.add("text-blue-600", "hover:underline", "text-sm");
        linkElement.textContent = `🔗 ${item.link}`;

        // Küçük resim (favicon)
        const faviconElement = document.createElement("img");
        faviconElement.src = item.favicon;
        faviconElement.alt = `${item.name} favicon`;
        faviconElement.classList.add("w-12", "h-12", "rounded");

        // Sol kısmı ve içerikleri birleştir
        contentDivElement.appendChild(titleElement);
        contentDivElement.appendChild(descriptionElement);
        contentDivElement.appendChild(createdAtElement);
        contentDivElement.appendChild(linkElement);
        leftDiv.appendChild(contentDivElement);

        // List item ve küçük resim elemanlarını birleştir
        listItem.appendChild(leftDiv);
        listItem.appendChild(faviconElement);

        // Listeye item'ı ekle
        contentDiv.appendChild(listItem);
    });
}

// JSON verisini fetch ile alıyoruz
fetch('data.json')
    .then(response => response.json())
    .then(data => renderContent(data))
    .catch(error => console.error('JSON dosyası yüklenirken hata oluştu:', error));
