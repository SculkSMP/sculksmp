

const datapacks = [
    { name: "The Nukes", url: "https://ohio.com", logo: "datapack_icons/pukes&nukes.png" },
    { name: "Data Pack 2", url: "http://example.com/datapack2.zip", logo: "logo2.png" },
    { name: "Data Pack 3", url: "http://example.com/datapack3.zip", logo: "logo3.png" },
    { name: "Data Pack 3", url: "http://example.com/datapack3.zip", logo: "logo3.png" },
    { name: "Data Pack 3", url: "http://example.com/datapack3.zip", logo: "logo3.png" },
    { name: "Data Pack 3", url: "http://example.com/datapack3.zip", logo: "logo3.png" },
    { name: "Data Pack 3", url: "http://example.com/datapack3.zip", logo: "logo3.png" },
    { name: "Data Pack 3", url: "http://example.com/datapack3.zip", logo: "logo3.png" },
    { name: "Data Pack 3", url: "http://example.com/datapack3.zip", logo: "logo3.png" },
    { name: "Data Pack 3", url: "http://example.com/datapack3.zip", logo: "logo3.png" },
    { name: "Data Pack 3", url: "http://example.com/datapack3.zip", logo: "logo3.png" },
    { name: "Data Pack 3", url: "http://example.com/datapack3.zip", logo: "logo3.png" },
    { name: "Data Pack 3", url: "http://example.com/datapack3.zip", logo: "logo3.png" },
    { name: "Data Pack 3", url: "http://example.com/datapack3.zip", logo: "logo3.png" },
    { name: "Data Pack 3", url: "http://example.com/datapack3.zip", logo: "logo3.png" },
    { name: "Data Pack 3", url: "http://example.com/datapack3.zip", logo: "logo3.png" },
    { name: "Data Pack 3", url: "http://example.com/datapack3.zip", logo: "logo3.png" },
    { name: "Data Pack 3", url: "http://example.com/datapack3.zip", logo: "logo3.png" },
    { name: "Data Pack 3", url: "http://example.com/datapack3.zip", logo: "logo3.png" },
    { name: "Data Pack 3", url: "http://example.com/datapack3.zip", logo: "logo3.png" },
    { name: "Data Pack 3", url: "http://example.com/datapack3.zip", logo: "logo3.png" },
    { name: "Data Pack 3", url: "http://example.com/datapack3.zip", logo: "logo3.png" },
    { name: "Data Pack 3", url: "http://example.com/datapack3.zip", logo: "logo3.png" },
    { name: "Data Pack 3", url: "http://example.com/datapack3.zip", logo: "logo3.png" },
    { name: "Data Pack 3", url: "http://example.com/datapack3.zip", logo: "logo3.png" },
    
];

// Function to display datapacks
function displayDatapacks() {
    const container = document.querySelector('.datapacks-container');
    
    datapacks.forEach(pack => {
        const packElement = document.createElement('div');
        packElement.classList.add('datapack');

        const logo = document.createElement('img');
        logo.src = pack.logo;
        logo.alt = pack.name + " Logo";

        const name = document.createElement('p');
        name.style.color = 'black';
        name.style.userSelect = 'none';
        name.textContent = pack.name;

        const downloadButton = document.createElement('button');
        downloadButton.textContent = "Download";
        downloadButton.classList.add('download-button');
        downloadButton.addEventListener('click', () => {
            window.open(pack.url, '_blank');
        });

        packElement.appendChild(logo);
        packElement.appendChild(name);
        packElement.appendChild(downloadButton);

        container.appendChild(packElement);
    });
}

// Call the function to display datapacks
displayDatapacks();
