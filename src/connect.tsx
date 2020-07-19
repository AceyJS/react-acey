import React, { useState, useEffect, forwardRef } from 'react'
import { manager, Model } from 'acey'

import { verifyIfOnlyModelsAndFunction } from './verify'
import { listModelAndGetterToJSON, hash } from './lib'

export type TConnected = Function | Model

export const connect = (list: TConnected[] = []): Function => {
    verifyIfOnlyModelsAndFunction(list, 'connect')
    return (App: React.ComponentClass) => {
        return forwardRef((props: any, ref: React.Ref<any>) => {
            const [listJSON, setListJSON] = useState(listModelAndGetterToJSON(list))

            useEffect(() => {
                let prev = listJSON
                manager.subscribers().add(() => {
                    const current = listModelAndGetterToJSON(list)
                    if (prev != current){
                        prev = current
                        setListJSON(current)
                    }
                })
            }, [])

            return <App {...props} __aceyTransitionID={hash(listJSON)} ref={ref} />
        })
    }
}

export const useAcey = (list: TConnected[] = []) => {
    const [listJSON, setListJSON] = useState(listModelAndGetterToJSON(list))

    useEffect(() => {
        let prev = listJSON
        manager.subscribers().add(() => {
            const current = listModelAndGetterToJSON(list)
            if (prev != current){
                prev = current
                setListJSON(current)
            }
        })
    }, [])
}

