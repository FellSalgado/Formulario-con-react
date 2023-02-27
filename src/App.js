import React from 'react';
import { Formulario, Label , GrupoInput, Input} from './elementos/Formulario';

//sfc
const App = () => {
    return (
        <main>
            <Formulario action="">
                <div>
                    <Label htmlFor="">Usuario</Label>
                    <GrupoInput>
                        <Input type="text" placeholder="usuario" />
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </GrupoInput>
                </div>
            </Formulario>
        </main>
    );
};

export default App;
