import styles from './Perfil.module.css'

// export default function() {
// export default () => {
const Perfil = ({ nomeUsuario }) => {
// const Perfil = (props) => {
//     const usuario = {
//         nome: 'Matheus Medeiros',
//         avatar: 'https://github.com/Teo0250.png'
//     }

    // const { endereco, nome } = props

    return (
        <header className={styles.header}>
            {/* {JSON.stringify(props)} */}
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`}/>
            <h1 className={styles.name}>
                {nomeUsuario}
            </h1>
        </header>
    )
}

export default Perfil