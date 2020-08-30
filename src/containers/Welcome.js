import React from 'react';
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';
import Slide from "material-auto-rotating-carousel/lib/Slide";
import Button from "@material-ui/core/Button";


function Welcome() {
    // const [handleOpen, setHandleOpen] = React.useState({ open: false });
    // const handleClick = () => {
    //     setHandleOpen({ open: true });
    // };
    const pular = function () {
console.log('ddddd');
    }
    const buttonOpts = {

        'variant': 'outlined',
        children: <Button onClick={pular}>teste</Button>,
        elementType: 'button',
        onClick: function () {
            console.log('action');
        }
    }
    return(
        <AutoRotatingCarousel open={true}
                              // onClose={() => setHandleOpen({ open: false })}
                              // onStart={() => setHandleOpen({ open: false })}
                              autoplay={false}
                              label="Pular"
                              mobile={true}
                              style={{ position: "absolute" }}
                              ButtonProps={buttonOpts}>
            <Slide
                media={
                    <img src="/assets/images/logo.png" alt="teste 1" />
                }
                // mediaBackgroundStyle={{ backgroundColor: red[400] }}
                // style={{ backgroundColor: red[600] }}
                title="Pokentregas"
                subtitle="Bem vindo"
            />
            <Slide
                media={
                    <img src="http://www.icons101.com/icon_png/size_256/id_79394/youtube.png" alt="teste 1" />
                }
                // mediaBackgroundStyle={{ backgroundColor: red[400] }}
                // style={{ backgroundColor: red[600] }}
                title="Desafio"
                subtitle="Escolha o pokemon certo para sua entrega."
            />
            <Slide
                media={
                    <img src="http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png" alt="teste 1" />
                }
                // mediaBackgroundStyle={{ backgroundColor: blue[400] }}
                // style={{ backgroundColor: blue[600] }}
                title="Ranking"
                subtitle="Veja quais são os melhores entregadores"
            />
            <Slide
                media={
                    <img src="http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png" alt="teste 1" />
                }
                // mediaBackgroundStyle={{ backgroundColor: green[400] }}
                // style={{ backgroundColor: green[600] }}
                title="Nos avalie"
                subtitle="Conte-nos depois como foi sua experiência."
            />

        </AutoRotatingCarousel>
    )
}

export default Welcome;
