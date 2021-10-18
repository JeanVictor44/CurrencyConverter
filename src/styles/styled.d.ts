import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title:string,
        colors: {
            background:string,
            text:{
                h1:string,
                h4:string,
                input:string,
            }
        }
    }
}