const profissionaisPorRegiao = {
    "Zona Sul": {
        "CDB": "Endereço: Rua Barão do Triunfo, 1.156 - Vila Progredior",
        "Labi Exames": "Endereço: Av. Dona Belmira Marin, 1046 - Grajaú | R. Silva Bueno, 2247 - Ipiranga | R. Barao do Rio Branco, 373 - Santo Amaro ou R.Domingos de Morais, 2104 - Vila Mariana | R. Fidêncio Ramos, 160 - Vila Olímpia ",
        "Lavoisier": "Endereço: Rua José Maria Lisboa, 365 - Jardim Paulista",
        "Neuro Care": "Endereço: Avenida Giovanni Gronchi, 5.930 - Vila Progredior"
    },
    "Zona Oeste": {
        "CDB": "Endereço: Rua Oeste, 54",
        "Labi Exames": "Endereço: R. Nossa Senhora da Lapa, 439 - Lapa",
        "Lavoisier": "Av. Autonomistas 1400 - Arco Ss02 - Vila Yara",
        "Clínica Morumbi": "Endereço: Rua Morumbi, 200",
        "Clínica Rubens do Val": "Endereço: Rua Rubens, 300"
    },
    "Zona Norte": {
        "CDB": "Endereço: Av. Leôncio de Magalhães, 874 - Jardim São Paulo,",
        "Labi Exames": "Rua dos Pinheiros 1392 - Pinheiros",
        "Lavoisier": "Rua Darzan 208 - Santana ",
        "Pura e Simples": "Rua Francisco Leitão 339, 8° andar, cj. 81 e 82 - Pinheiros"
    },
    "Zona Leste": {
        "CDB": "Endereço: R. Vilela, 800 - Tatuapé,",
        "Labi Exames": "Endereço: R. Victório Santim, 81 - Itaquera | R. Joao Augusto Morais, 240 - São Miguel | Pç. Silvio Romero, 150 - Tatuápe",
        "Lavoisier": "Rua Euclides Pacheco 424 - Tatuapé",
        "Sua Imagem": "Endereço: Rua Imagem, 400",
        "Qualimed": "Endereço: Rua Qualidade, 500",
        "Clínica Rubens do Val": "Rua Apucarana 326, cj. 94 e 96 - Tatuapé"
    },
    "Zona Central": {
        "CDB": "Endereço: Rua Central, 123",
        "Labi Exames": "Endereço: Rua CentAv. São Luis, 218 - República",
        "Lavoisier": "Endereço: Avenida Central, 789",
        "Alpha República": "Endereço: Rua República, 600"
    },
    "Barueri": {
        "Sanitas": "Rua das Palmeiras, 1.000 - Barueri",
        "Alpha Barueri": "Avenida dos Alphonsos, 2.000 - Barueri"
    },
    "Guarulhos": {
        "Casa da Esperança": "Rua Fradique Coutinho 602"
    },
    "Osasco": {
        "Sanitas": "Rua das Palmeiras, 1.000 - Barueri",
        "Alpha Barueri": "Avenida dos Alphonsos, 2.000 - Barueri"
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
