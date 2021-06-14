import React, {useState} from 'react'
import { declareAction, declareAtom } from '@reatom/core'
import { useAction, useAtom } from '@reatom/react'



export const usersAtom = declareAtom(
    "offers", // name
    [{id: 1, name: 'test-1'}, {id: 2, name: 'test-2'}],
    on => () => console.log('test')
)