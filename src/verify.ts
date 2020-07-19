import { Model } from 'acey'
import { TConnected } from './types'

export const verifyIfOnlyModelsAndFunction = (v: TConnected[], origin: string) => {
    const defaultError = `${origin}'s first parameter must be an Array of Model, Collection, or unexecuted getters.`

    if (!Array.isArray(v)){
        throw new Error(defaultError)
    }

    for (let i = 0; i < v.length; i++){
        const e = v[i]
        if (!(e instanceof Model) && !(typeof e === 'function'))
            throw new Error(`
                ${defaultError}
                Please check the ${i+1}${i == 0 ? 'st' : (i == 1) ? 'nd' : 'st'} element of the Array. Currently typed as a : ${typeof e}.
            `)
    }
}