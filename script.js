// Data dinamis
const sections = [
    {
        id: "sejarah",
        title: "Sejarah Sepakbola Italia",
        content: "Sepakbola Italia memiliki sejarah panjang dan penuh prestasi. Italia dikenal sebagai salah satu negara dengan tradisi sepakbola terkuat di dunia, dengan klub-klub legendaris dan pemain-pemain kelas dunia."
    },
    {
        id: "liga",
        title: "Serie A",
        content: "Serie A adalah liga tertinggi di Italia, rumah bagi klub-klub besar seperti Juventus, AC Milan, Inter Milan, dan AS Roma. Liga ini terkenal dengan pertahanan yang solid dan taktik yang cerdas.",
        clubs: [
            { name: "Juventus", logo: "https://upload.wikimedia.org/wikipedia/en/3/3d/Juventus_Turin.svg" },
            { name: "AC Milan", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg" },
            { name: "Inter Milan", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/FC_Internazionale_Milano_2021.svg" },
            { name: "AS Roma", logo: "https://upload.wikimedia.org/wikipedia/en/f/f7/AS_Roma_logo_%282017%29.svg" }
        ]
    },
    {
        id: "timnas",
        title: "Tim Nasional Italia",
        content: "Timnas Italia, dikenal dengan sebutan Gli Azzurri, telah memenangkan Piala Dunia sebanyak 4 kali dan menjadi salah satu tim nasional tersukses di dunia.",
        achievements: [
            "Juara Piala Dunia: 1934, 1938, 1982, 2006",
            "Juara Euro: 1968, 2020",
            "Finalis Euro: 2000, 2012"
        ]
    }
];

function renderSections() {
    const container = document.getElementById('content');
    container.innerHTML = '';

    sections.forEach(section => {
        const sec = document.createElement('section');
        sec.id = section.id;

        const h2 = document.createElement('h2');
        h2.textContent = section.title;
        sec.appendChild(h2);

        const p = document.createElement('p');
        p.textContent = section.content;
        sec.appendChild(p);

        // Tambahkan klub jika ada
        if (section.clubs) {
            const clubList = document.createElement('div');
            clubList.className = 'card-list';
            section.clubs.forEach(club => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <img src="${club.logo}" alt="${club.name} logo">
                    <div>${club.name}</div>
                `;
                clubList.appendChild(card);
            });
            sec.appendChild(clubList);
        }

        // Tambahkan prestasi jika ada
        if (section.achievements) {
            const ul = document.createElement('ul');
            section.achievements.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                ul.appendChild(li);
            });
            sec.appendChild(ul);
        }

        container.appendChild(sec);
    });

    // CTA
    const cta = document.createElement('a');
    cta.href = "#kontak";
    cta.className = "cta";
    cta.textContent = "Gabung Komunitas";
    container.appendChild(cta);
}

document.addEventListener('DOMContentLoaded', renderSections); 