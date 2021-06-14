import React, { useState, useContext, useEffect } from 'react';
import Modal from 'react-modal';
import ReactSelect from 'react-select';

import {Input, TextArea} from '../../components/controls/Input/Input'
import {Button} from '../../components/controls/Button/Button'
import Select from '../../components/controls/Select/Select'

import {apiCreateParam, apiGetParams, apiEditParam} from '../../actions/api'

import '../../static/css/styles-admin.css'
import {Label} from "../../components/Layouts/styledLayouts";

const options = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' }
];
const options2 = [
    { value: 'bool', label: 'Yes/No' },
    { value: 'int', label: 'Number' },
    { value: 'list', label: 'List' },
    { value: 'input', label: 'Text' }
];


const Params = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isSending, setIsSending] = useState(false)
    const [params, setParams] = useState({})
    const [listParams, setListParams] = useState([])
    const [optionsCategories, setOptionsCategories] = useState([])


    useEffect(() => {
        apiGetParams()
            .then(res => {
                res.data.map(item => {
                    // debugger
                    item.step = {value: item.step, label: item.step}
                    item.type = options2.find(item2 => item2.value == item.type)
                    // debugger
                })


                setListParams(res.data)
            })
    }, [])

    const handleEditParam = (param) => {
        let clone = Object.assign({}, param)
        setParams(clone)
        setIsOpen(true)
    }

    const openModal = () => {
        setIsOpen(true)
    }
    const closeModal = () => {
        setIsOpen(false)
        setParams({})
    }


    const onChange = (e) => {
        let {name, value} = e.target;
        setParams({...params, [name]: value})
    }
    const handleCreateEdit = () => {
        let obj = Object.assign({}, params)
        obj.type = params.type? params.type.value : ''
        obj.step = params.step? params.step.value : ''

        if(Array.isArray(params.possibleValues)) params.possibleValues = params.possibleValues[0]
        obj.possibleValues =  params.possibleValues ? params.possibleValues.split(',') : ''




        if(obj.id) {
            apiEditParam(obj)
                .then(res => {
                    res.data.step = {value: res.data.step, label: res.data.step}
                    res.data.type = options2.find(item2 => item2.value == res.data.type)
                    let newArr = listParams.map(el => (el.id === res.data.id ? Object.assign({}, res.data) : el))
                    setListParams(newArr)
                    closeModal()
                })
                .catch(e => {

                })
        } else {
            apiCreateParam(obj)
                .then(res => {
                    res.data.step = {value: res.data.step, label: res.data.step}
                    res.data.type = options2.find(item2 => item2.value == res.data.type)
                    setListParams([...listParams, res.data])
                    closeModal()
                })
                .catch(e => {

                })
        }


    }


    let onChangeStep = (value) => {
        setParams({...params, ['step']: value})
    }
    let onChangeType = (value) => {
        setParams({...params, ['type']: value})
    }
    let onChangeCategories = (value) => {
        setParams({...params, ['categories']: value})
    }



    return (
        <>
            <div className={'z-wrap-admin'}>
                <h2>
                    Params
                    <Button
                        inline
                        onClick={openModal}
                    >
                        Добавить
                    </Button>
                </h2>

                <div className="z-custom-table">
                    <div className="z-custom-table-header">
                        <div className="z-custom-table-column-1">
                            Title
                        </div>
                        <div className="z-custom-table-column-1">
                            Description
                        </div>
                        <div className="z-custom-table-column-2">
                            Step
                        </div>
                        <div className="z-custom-table-column-2">
                            Unit
                        </div>
                        <div className="z-custom-table-column-2">
                            Type
                        </div>
                        <div className="z-custom-table-column-2">
                            Possible Values
                        </div>
                        <div className="z-custom-table-column-2">
                            Default Value
                        </div>
                        <div className="z-custom-table-column-2">
                            Actions
                        </div>
                    </div>

                    {listParams.map(item =>
                        <div key={item.id} className="z-custom-table-row">
                            <div className="z-custom-table-column-1">
                                {item.title}
                            </div>
                            <div className="z-custom-table-column-1">
                                {item.description}
                            </div>
                            <div className="z-custom-table-column-2">
                                {item.step.value}
                            </div>
                            <div className="z-custom-table-column-2">
                                {item.units}
                            </div>
                            <div className="z-custom-table-column-2">
                                {item.type.value}
                            </div>
                            <div className="z-custom-table-column-2">
                                {item.possibleValues.join(', ')}
                            </div>
                            <div className="z-custom-table-column-2">
                                {item.defaultValue}
                            </div>
                            <div className="z-custom-table-column-2">
                                <span onClick={() => handleEditParam(item)}>Edit</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                ariaHideApp={false}
                className=" modal-params"
            >

                <div className={'mp-wrap'}>
                    <div className="mp-title">
                        Создать новый параметр
                    </div>
                    <div className="mp-content">
                        <div className='mp-label'>Title</div>
                        <Input value={params.title}
                               name='title'
                               onChange={onChange}
                               placeholder="Title"
                               mb={'5px'}
                        />
                        <div className='mp-label'>Description</div>
                        <TextArea name='description'
                                  value={params.description}
                                  onChange={onChange}
                                  height={80}
                                  placeholder="Description"
                                  mb={'5px'}
                        />
                        <div className='mp-label'>Type</div>
                        <Select
                            options={options2}
                            value={params.type}
                            onChange={onChangeType}
                            mb={'10px'}
                        />
                        <div className='mp-label'>Step</div>
                        <Select
                            options={options}
                            value={params.step}
                            onChange={onChangeStep}
                            mb={'10px'}
                        />
                        <div className='mp-label'>Unit</div>
                        <Input value={params.units}
                               name='units'
                               onChange={onChange}
                               placeholder="Unit"
                               mb={'5px'}
                        />
                        {params.type && params.type.value === 'list' &&
                            <>
                                <div className='mp-label'>Possible Values (via comma, etc: "1, 2, 3")</div>
                                <Input value={params.possibleValues}
                                       name='possibleValues'
                                       onChange={onChange}
                                       placeholder="Possible Values"
                                       mb={'5px'}
                                />
                            </>
                        }

                        <div className='mp-label'>Default Value</div>
                        <Input value={params.defaultValue}
                               name='defaultValue'
                               onChange={onChange}
                               placeholder="pv"
                               mb={'5px'}
                        />

                        {/*<div className='mp-label'>Categories</div>*/}
                        {/*<Select*/}
                        {/*    options={optionsCategories}*/}
                        {/*    value={params.categories}*/}
                        {/*    isMulti={true}*/}
                        {/*    onChange={onChangeCategories}*/}
                        {/*    mb={'10px'}*/}
                        {/*/>*/}

                    </div>

                    <div className="mp-footer">
                        <Button
                            inline
                            blue
                            onClick={handleCreateEdit}
                        >
                            {params.id? 'Редактировать' : 'Создать'}
                        </Button>

                        <Button
                            inline
                            onClick={closeModal}
                        >
                            Закрыть
                        </Button>
                    </div>


                </div>
            </Modal>
        </>

    );
};

export default Params;
