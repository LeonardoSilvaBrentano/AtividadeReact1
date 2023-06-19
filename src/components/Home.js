import Card from "./Card/Card"

function Home(props){

    console.log(props.reproduz)

    return(
        <section class="painel-de-videos">


            <Card 
            reproduz={props.reproduz}
            link={"https://picsum.photos/400/400?a=1"}
            titulo={"Título do vídeo1"}
            />


{
            <Card 
            reproduz={props.reproduz}
            link={"https://picsum.photos/400/400?a=2"}
            titulo={"Título do vídeo2"}
            />
}
{
            <Card 
            reproduz={props.reproduz}
            link={"https://picsum.photos/400/400?a=3"}
            titulo={"Título do vídeo3"}
            />
}
{
            <Card 
            reproduz={props.reproduz}
            link={"https://picsum.photos/400/400?a=4"}
            titulo={"Título do vídeo4"}
            />
}
{
            <Card 
            reproduz={props.reproduz}
            link={"https://picsum.photos/400/400?a=5"}
            titulo={"Título do vídeo 5"}
            />
}
{
            <Card 
            reproduz={props.reproduz}
            link={"https://picsum.photos/400/400?a=6"}
            titulo={"Título do vídeo 6"}
            />
}
{
            <Card 
            reproduz={props.reproduz}
            link={"https://picsum.photos/400/400?a=7"}
            titulo={"Título do vídeo 7"}
            />
}
{
            <Card 
            reproduz={props.reproduz}
            link={"https://picsum.photos/400/400?a=8"}
            titulo={"Título do vídeo 8"}
            />
}
{
            <Card 
            reproduz={props.reproduz}
            link={"https://picsum.photos/400/400?a=9"}
            titulo={"Título do vídeo 9"}
            />
}
{
            <Card 
            reproduz={props.reproduz}
            link={"https://picsum.photos/400/400?a=10"}
            titulo={"Título do vídeo 10"}
            />
}
        {/* <div class="box-pagina-principal media1" onClick={props.reproduz}>
            <img src="https://picsum.photos/400/400?a=1 " alt=""></img>
            <h4>Título do vídeo</h4>
        </div>
        <div class="box-pagina-principal media2" onClick={props.reproduz}>
            <img src="https://picsum.photos/400/400?a=2 " alt=""></img>
            <h4>Título do vídeo</h4>
        </div>
        <div class="box-pagina-principal media3" onClick={props.reproduz}>
            <img src="https://picsum.photos/400/400?a=3 " alt=""></img>
            <h4>Título do vídeo</h4>
        </div>
        <div class="box-pagina-principal media4" onClick={props.reproduz}>
            <img src="https://picsum.photos/400/400?a=4 " alt=""></img>
            <h4>Título do vídeo</h4>
        </div>
        <div class="box-pagina-principal media5" onClick={props.reproduz}>
            <img src="https://picsum.photos/400/400?a=5 " alt=""></img>
            <h4>Título do vídeo</h4>
        </div>
        <div class="box-pagina-principal media6" onClick={props.reproduz}>
            <img src="https://picsum.photos/400/400?a=6 " alt=""></img>
            <h4>Título do vídeo</h4>
        </div>
        <div class="box-pagina-principal media7" onClick={props.reproduz}>
            <img src="https://picsum.photos/400/400?a=7 " alt=""></img>
            <h4>Título do vídeo</h4>
        </div>
        <div class="box-pagina-principal media8" onClick={props.reproduz}>
            <img src="https://picsum.photos/400/400?a=8 " alt=""></img>
            <h4>Título do vídeo</h4>
        </div> */}
    </section>
    )
}

export default Home