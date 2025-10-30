// js/main.js

document.addEventListener("DOMContentLoaded", () => {
    
    // --- Controle do Modal ---
    const openModalButtons = document.querySelectorAll("[data-modal-target]");
    const closeModalButtons = document.querySelectorAll("[data-modal-close]");
    const backdrop = document.getElementById("modalBackdrop");

    openModalButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            const modal = document.querySelector(button.dataset.modalTarget);
            openModal(modal);
        });
    });

    closeModalButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            const modal = button.closest(".modal");
            closeModal(modal);
        });
    });

    if (backdrop) {
        backdrop.addEventListener("click", () => {
            const openModal = document.querySelector(".modal.show");
            if (openModal) {
                closeModal(openModal);
            }
        });
    }

    function openModal(modal) {
        if (modal == null) return;
        if (backdrop) backdrop.classList.add("show");
        modal.classList.add("show");
    }

    function closeModal(modal) {
        if (modal == null) return;
        if (backdrop) backdrop.classList.remove("show");
        modal.classList.remove("show");
    }

    // --- Controle do Multi-Select de Habilidades (Simulação) ---
    const multiSelectContainers = document.querySelectorAll(".multi-select-container");

    multiSelectContainers.forEach(container => {
        const input = container.querySelector(".multi-select-input");
        const suggestions = container.querySelector(".suggestions-dropdown");
        const selectedSkills = container.querySelector(".selected-skills");

        // Simulação de sugestões
        const fakeSuggestions = ["JavaScript", "React", "Node.js", "SQL", "Comunicação", "Gestão de Projetos", "Proatividade", "HTML", "CSS", "Python"];

        input.addEventListener("focus", () => {
            showSuggestions();
        });

        // Fechar dropdown se clicar fora
        document.addEventListener("click", (e) => {
            if (!container.contains(e.target)) {
                suggestions.style.display = "none";
            }
        });

        function showSuggestions() {
            suggestions.innerHTML = ""; // Limpa sugestões antigas
            fakeSuggestions.forEach(skill => {
                const item = document.createElement("div");
                item.classList.add("suggestion-item");
                item.textContent = skill;
                item.addEventListener("click", () => {
                    addSkill(skill);
                    input.value = "";
                    suggestions.style.display = "none";
                });
                suggestions.appendChild(item);
            });
            suggestions.style.display = "block";
        }

        function addSkill(skill) {
            // Evita duplicados (placeholder)
            const existing = Array.from(selectedSkills.children).find(pill => pill.dataset.skill === skill);
            if (existing) return;

            const pill = document.createElement("div");
            pill.classList.add("skill-pill");
            pill.dataset.skill = skill;
            pill.innerHTML = `
                ${skill}
                <span class="remove-skill" title="Remover">&times;</span>
            `;
            
            pill.querySelector(".remove-skill").addEventListener("click", () => {
                pill.remove();
            });

            selectedSkills.appendChild(pill);
        }
    });

    // --- Formatação de CPF e CNPJ ---
    const cpfInput = document.getElementById("cpf");
    const cnpjInput = document.getElementById("cnpj");

    if (cpfInput) {
        cpfInput.addEventListener("input", (e) => {
            let value = e.target.value.replace(/\D/g, "");
            if (value.length > 11) {
                value = value.slice(0, 11);
            }

            value = value.replace(/(\d{3})(\d)/, "$1.$2");
            value = value.replace(/(\d{3})(\d)/, "$1.$2");
            value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
            e.target.value = value;
        });
    }

    if (cnpjInput) {
        cnpjInput.addEventListener("input", (e) => {
            let value = e.target.value.replace(/\D/g, "");
            if (value.length > 14) {
                value = value.slice(0, 14);
            }
            
            value = value.replace(/(\d{2})(\d)/, "$1.$2");
            value = value.replace(/(\d{3})(\d)/, "$1.$2");
            value = value.replace(/(\d{3})(\d)/, "$1/$2");
            value = value.replace(/(\d{4})(\d{1,2})$/, "$1-$2");
            e.target.value = value;
        });
    }
});