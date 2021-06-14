import React, {useState} from 'react'
import { declareAction, declareAtom } from '@reatom/core'
import { useAction, useAtom } from '@reatom/react'


export const onChange = declareAction("onChange")
export const addTodo = declareAction("addTodo")