// export async function getServerSideProps(context) {
//     const slug = context.query.slug

//     return {
//         props: {
//             slug: slug
//         }
//     }
// }
export async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    slug: 'areias'
                }
            },
            {
                params: {
                    slug: 'ipiranga'
                }
            },
            {
                params: {
                    slug: 'serraria'
                }
            },
        ],
        fallback: 'blocking' // blocking é melhor para o SEO em páginas dinâmicas
    }
}

export async function getStaticProps(context) {
    const slug = context.params.slug

    return {
        props: {
            slug: slug
        }
    }
}

function Bairros(props) {
    return <h1>Slug do Bairro: {props.slug}</h1>
}

export default Bairros