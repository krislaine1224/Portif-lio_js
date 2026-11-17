"use strict";

// ========================================
// 1. DADOS PROFISSIONAIS
// ========================================

const cv = {

    personalInformation: {

        fullName: "Krislaine de Lima Silvestre",

        professionalTitle:
            "Estudante de Análise e Desenvolvimento de Sistemas",

        email: "krislaine1224@gmail.com",

        phone: "11993294134",

        profilePhoto: "images/Kris.jpg",

        linkedin:
            "https://www.linkedin.com/in/krislaine-silvestre-4ba6211a7",

        github:
            "https://github.com/krislaine1224",

        location: {
            city: "Suzano",
            state: "São Paulo",
            country: "Brasil"
        }
    },

    professionalSummary: {

        description:
            "Sou estudante de Análise e Desenvolvimento de Sistemas, " +
            "atualmente no segundo semestre. Tenho interesse em tecnologia, " +
            "desenvolvimento web e banco de dados. Estou desenvolvendo " +
            "meus conhecimentos por meio dos estudos e projetos práticos, " +
            "buscando evoluir continuamente na área de Tecnologia da Informação.",

        careerObjective:
            "Busco uma oportunidade de estágio em Tecnologia da Informação " +
            "para desenvolver minhas habilidades, adquirir experiência " +
            "prática e contribuir com projetos e equipes de tecnologia."
    },

    skills: {

        technical: [
            { name: "HTML5", level: "Básico" },
            { name: "CSS3", level: "Básico" },
            { name: "JavaScript", level: "Básico" },
            { name: "MySQL", level: "Básico" },
            { name: "Python", level: "Em aprendizado" }
        ],

        learning: [
            "React",
            "TypeScript",
            "APIs REST",
            "Git e GitHub"
        ],

        tools: [
            "Visual Studio Code",
            "GitHub",
            "MySQL"
        ]
    },

    education: [
        {
            institution: "Centro Universitário Unipiaget",
            course: "Análise e Desenvolvimento de Sistemas",
            degree: "Tecnólogo",
            startDate: "2026",
            endDate: "06/2028",
            status: "Em andamento",
            description: "Cursando o segundo semestre."
        }
    ],

    certifications: [
        {
            name: "Microsoft AI-900",
            institution: "SENAI",
            description:
                "Curso de fundamentos de Inteligência Artificial da Microsoft."
        },
        {
            name: "Inglês Básico",
            institution: "SENAC",
            description: "Curso de Inglês Básico."
        }
    ],

    projects: [
        {
            name: "Portfólio profissional",
            description:
                "Desenvolvimento de uma página pessoal para apresentar " +
                "minha trajetória acadêmica, habilidades e projetos na área de TI.",

            technologies: [
                "HTML",
                "CSS",
                "JavaScript"
            ],

            url: "https://github.com/krislaine1224"
        }
    ]
};

// ========================================
// 2. ACESSANDO OS DADOS
// ========================================

const pessoa = cv.personalInformation;

// ========================================
// 3. FUNÇÃO PARA PREENCHER TEXTOS
// ========================================

function preencherTexto(id, texto) {
    const elemento = document.getElementById(id);
    if (elemento) {
        elemento.textContent = texto;
    }
}

// ========================================
// 4. APRESENTAÇÃO
// ========================================

preencherTexto("nome", pessoa.fullName);
preencherTexto("titulo", pessoa.professionalTitle);
preencherTexto("objetivo", cv.professionalSummary.careerObjective);
preencherTexto("resumo", cv.professionalSummary.description);
preencherTexto("localizacao", `${pessoa.location.city} - ${pessoa.location.state}, ${pessoa.location.country}`);
preencherTexto("nome-footer", pessoa.fullName);
preencherTexto("ano", new Date().getFullYear());
preencherTexto("carreira", cv.professionalSummary.careerObjective);

// ========================================
// 5. CONFIGURAR LINKS
// ========================================

function configurarLink(id, url) {
    const elemento = document.getElementById(id);
    if (elemento) {
        elemento.href = url;
    }
}

configurarLink("linkedin", pessoa.linkedin);
configurarLink("linkedin-contato", pessoa.linkedin);
configurarLink("github-projetos", pessoa.github);
configurarLink("github-contato", pessoa.github);

// ========================================
// 6. CONFIGURAR E-MAIL E TELEFONE
// ========================================

const email = document.getElementById("email-link");
if (email) {
    email.href = `mailto:${pessoa.email}`;
    email.textContent = pessoa.email;
}

const telefone = document.getElementById("telefone-link");
if (telefone) {
    telefone.href = `tel:+55${pessoa.phone}`;
    telefone.textContent = "(11) 99329-4134";
}

// ========================================
// 7. MOSTRAR HABILIDADES
// ========================================

function mostrarHabilidades() {
    const lista = document.getElementById("habilidades-lista");
    if (!lista) return;
    cv.skills.technical.forEach(item => {
        const card = document.createElement("div");
        card.className = "skill";
        const titulo = document.createElement("h3");
        titulo.textContent = item.name;
        const nivel = document.createElement("p");
        nivel.textContent = "Nível: " + item.level;
        card.append(titulo, nivel);
        lista.appendChild(card);
    });
}
mostrarHabilidades();

// ========================================
// 8. TECNOLOGIAS EM ESTUDO
// ========================================

function mostrarEstudos() {
    const lista = document.getElementById("estudos-lista");
    if (!lista) return;
    cv.skills.learning.forEach(item => {
        const tecnologia = document.createElement("span");
        tecnologia.className = "tool";
        tecnologia.textContent = item;
        lista.appendChild(tecnologia);
    });
}
mostrarEstudos();

// ========================================
// 9. FERRAMENTAS
// ========================================

function mostrarFerramentas() {
    const lista = document.getElementById("ferramentas-lista");
    if (!lista) return;
    cv.skills.tools.forEach(item => {
        const ferramenta = document.createElement("span");
        ferramenta.className = "tool";
        ferramenta.textContent = item;
        lista.appendChild(ferramenta);
    });
}
mostrarFerramentas();

// ========================================
// 10. FORMAÇÃO ACADÊMICA
// ========================================

function mostrarFormacao() {
    const lista = document.getElementById("formacao-lista");
    if (!lista) return;
    cv.education.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        const titulo = document.createElement("h3");
        titulo.textContent = item.course;
        const instituicao = document.createElement("p");
        instituicao.textContent = item.institution;
        const periodo = document.createElement("p");
        periodo.textContent = `${item.startDate} até ${item.endDate}`;
        const situacao = document.createElement("p");
        situacao.textContent = item.status;
        const descricao = document.createElement("p");
        descricao.textContent = item.description;
        card.append(titulo, instituicao, periodo, situacao, descricao);
        lista.appendChild(card);
    });
}
mostrarFormacao();

// ========================================
// 11. CERTIFICAÇÕES
// ========================================

function mostrarCertificacoes() {
    const lista = document.getElementById("certificacoes-lista");
    if (!lista) return;
    cv.certifications.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        const titulo = document.createElement("h3");
        titulo.textContent = item.name;
        const instituicao = document.createElement("p");
        instituicao.textContent = item.institution;
        const descricao = document.createElement("p");
        descricao.textContent = item.description;
        card.append(titulo, instituicao, descricao);
        lista.appendChild(card);
    });
}
mostrarCertificacoes();

// ========================================
// 12. PROJETOS
// ========================================

function mostrarProjetos() {
    const lista = document.getElementById("projetos-lista");
    if (!lista) return;
    cv.projects.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        const titulo = document.createElement("h3");
        titulo.textContent = item.name;
        const descricao = document.createElement("p");
        descricao.textContent = item.description;
        const tecnologias = document.createElement("p");
        tecnologias.textContent = "Tecnologias: " + item.technologies.join(", ");
        const link = document.createElement("a");
        link.href = item.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = "Acessar GitHub";
        card.append(titulo, descricao, tecnologias, link);
        lista.appendChild(card);
    });
}
mostrarProjetos();

console.log("Portfólio carregado com sucesso!");
console.log("Dados profissionais:", cv);