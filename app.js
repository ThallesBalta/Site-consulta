const profissionaisPorRegiao = {
    "Zona Sul": {
        "CDB": "Endereço: Rua Exemplo, 123",
        "Labi": "Endereço: Rua Fictícia, 456",
        "Lavoisier": "Endereço: Avenida Tal, 789",
        "Neuro Care": "Endereço: Rua das Flores, 321"
    },
    "Zona Oeste": {
        "CDB": "Endereço: Rua Oeste, 54",
        "Labi": "Endereço: Rua Leste, 78",
        "Lavoisier": "Endereço: Avenida Oeste, 101",
        "Clínica Morumbi": "Endereço: Rua Morumbi, 200",
        "Clínica Rubens do Val": "Endereço: Rua Rubens, 300"
    },
    "Zona Norte": {
        "CDB": "Endereço: Rua Norte, 123",
        "Labi": "Endereço: Rua Norte, 456",
        "Lavoisier": "Endereço: Avenida Norte, 789",
        "Pura e Simples": "Endereço: Rua Simples, 300"
    },
    "Zona Leste": {
        "CDB": "Endereço: Rua Leste, 123",
        "Labi": "Endereço: Rua Leste, 456",
        "Lavoisier": "Endereço: Avenida Leste, 789",
        "Sua Imagem": "Endereço: Rua Imagem, 400",
        "Qualimed": "Endereço: Rua Qualidade, 500",
        "Clínica Rubens do Val": "Endereço: Rua Rubens, 200"
    },
    "Zona Central": {
        "CDB": "Endereço: Rua Central, 123",
        "Labi": "Endereço: Rua Central, 456",
        "Lavoisier": "Endereço: Avenida Central, 789",
        "Alpha República": "Endereço: Rua República, 600"
    },
    "Barueri": {
        "Sanitas": "Endereço: Rua Sanitas, 700",
        "Alpha Barueri": "Endereço: Avenida Alpha, 800"
    },
    "Guarulhos": {
        "Sanitas": "Endereço: Rua Sanitas, 700",
        "Casa da Esperança": "Endereço: Rua Esperança, 900"
    },
    "Osasco": {
        "Sanitas": "Endereço: Rua Sanitas, 700",
        "Alpha Barueri": "Endereço: Avenida Alpha, 800"
    }
};

// Atualiza as regiões com base na cidade selecionada
function atualizarRegioes() {
    const cidadeSelecionada = document.getElementById('cidade').value;
    const regiaoSelect = document.getElementById('regiao');
    regiaoSelect.innerHTML = '<option value="" disabled selected>Escolha a região</option>'; // Limpa as opções anteriores

    if (cidadeSelecionada) {
        // Filtra regiões com base na cidade selecionada
        const regioesDisponiveis = Object.keys(profissionaisPorRegiao).filter(regiao => {
            return cidadeSelecionada === "São Paulo" && regiao.includes("Zona") || cidadeSelecionada === "Grande São Paulo" && !regiao.includes("Zona");
        });

        regioesDisponiveis.forEach(regiao => {
            const option = document.createElement('option');
            option.value = regiao;
            option.textContent = regiao;
            regiaoSelect.appendChild(option);
        });

        regiaoSelect.disabled = false;
    } else {
        regiaoSelect.disabled = true;
    }
}

// Busca as clínicas disponíveis na região selecionada
function buscarProfissionais() {
    const cidadeSelecionada = document.getElementById('cidade').value;
    const regiaoSelecionada = document.getElementById('regiao').value;
    const resultadoDiv = document.getElementById('resultado');

    if (cidadeSelecionada && regiaoSelecionada) {
        const profissionais = profissionaisPorRegiao[regiaoSelecionada];

        if (profissionais) {
            let resultadoHTML = `Clínicas disponíveis em ${regiaoSelecionada} (${cidadeSelecionada}): <br><ul>`;

            for (const [nome, endereco] of Object.entries(profissionais)) {
                resultadoHTML += `<li>${nome} - ${endereco}</li>`;
            }

            resultadoHTML += `</ul>`;
            resultadoDiv.innerHTML = resultadoHTML;
        } else {
            resultadoDiv.innerHTML = `Nenhum profissional encontrado para a região selecionada (${regiaoSelecionada}).`;
        }
    } else {
        resultadoDiv.innerHTML = 'Por favor, selecione uma cidade e uma região.';
    }
}
