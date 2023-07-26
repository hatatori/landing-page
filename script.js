new Vue({
    el: '#app',
    data: {
        arr: [1, 2, 3, 4],
        logos: [
            {
                img: "logos/blossom.svg",
                text: "blossom"
            },
            {
                img: "logos/dune.svg",
                text: "dune"
            },
            {
                img: "logos/ebooks.svg",
                text: "ebooks"
            },
            {
                img: "logos/flash.svg",
                text: "flash"
            },
            {
                img: "logos/glossy.svg",
                text: "glossy"
            },
            {
                img: "logos/greenish.svg",
                text: "greenish"
            },
            {
                img: "logos/iceberg.svg",
                text: "iceberg"
            },
            {
                img: "logos/invert.svg",
                text: "invert"
            },
            {
                img: "logos/mindfulness.svg",
                text: "mindfulness"
            },
            {
                img: "logos/minty.svg",
                text: "minty"
            },
            {
                img: "logos/network.svg",
                text: "network"
            },
            {
                img: "logos/orbitc.svg",
                text: "orbitc"
            },
            {
                img: "logos/pinpoint.svg",
                text: "pinpoint"
            },
            {
                img: "logos/product.svg",
                text: "product"
            },
            {
                img: "logos/proline.svg",
                text: "proline"
            },
            {
                img: "logos/recharge.svg",
                text: "recharge"
            },
            {
                img: "logos/rise.svg",
                text: "rise"
            },
            {
                img: "logos/scale.svg",
                text: "scale"
            },
            {
                img: "logos/sitemark.svg",
                text: "sitemark"
            },
            {
                img: "logos/snapshot.svg",
                text: "snapshot"
            },
            {
                img: "logos/snowflake.svg",
                text: "snowflake"
            },
            {
                img: "logos/terra.svg",
                text: "terra"
            },
            {
                img: "logos/trace.svg",
                text: "trace"
            },
            {
                img: "logos/vertigo.svg",
                text: "vertigo"
            }
        ],
        planos: [
            {
                title: "Beginner",
                head: `
                Transcrição de Áudio Assíncrono
                120 min (R$0,20 / min excedente)

                Transcrição de Áudio em tempo real
                90 min (R$0,40 / min excedente)

                Identificação de Idiomas em áudios
                200 min (R$0,05 / min excedente)

                Análise de sentimento a partir do áudio (áudio pré-gravado)
                120 min (R$0,40 / min excedente)
                `,

                price1: `R$29/mês`,
                price2: "R$328/ano"
            },
            {
                title: "Business",
                head: `
                Transcrição de Áudio Assíncrono
                200 min (R$0,15 / min excedente)

                Transcrição de Áudio em tempo real
                120 min (R$0,40 / min excedente)

                Identificação de Idiomas em áudios
                500 min (R$0,03 / min excedente)

                Análise de sentimento a partir do áudio (áudio pré-gravado)
                200 min (R$0,35 / min excedente)
                `,

                price1: `R$44/mês`,
                price2: "R$499/ano"
            },
        ]
    },
    methods: {
        trim(ar) {
            return ar.replace(/  |\n\n\n/g, "").trim()
        }
    }
})



