import React from 'react';
import View from "../core/components/View";
import {ViewState} from "../core/enum";

function Second(props) {
    const store={
        second:{
            button:ViewState.DISABLED
        }
    };
    return <div >
        This is second page
        <View id="button" page="second" store={store}>
           <button>Hej</button>
        </View>
    </div>
}

export default Second;