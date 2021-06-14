import React, { useState, useContext, useEffect } from 'react';
import Modal from 'react-modal';
import {apiGetParams} from '../../actions/api'

import {Button, ButtonMin} from "../../components/controls/Button/Button";
import {Title, Label2} from "../../components/Layouts/styledLayouts";
import {Wrapper, WrapperHeight} from "../../components/StyledComponents/Wrapper";
import {apiAdminProgrammerCategories, apiEditCategoryTemplare, apiGetFrontCategories} from "../../actions/api";
import {ButtonWithIcon} from "../../components/controls/Button/ButtonWithIcon";
import UploadBtn from "../../components/controls/Upload/UploadBtn";
import {showNotification} from "../../utils/notification";
import {Input} from "../../components/controls/Input/Input";
import {CheckboxWithLabel} from "../../components/controls/Checkbox/Checkbox";
import '../../static/css/styles-admin.css'
import Header from "../../components/Header/Header";

const Categories = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [fileCategories, setCtegories] = useState([])
    const [categories, setCategories] = useState([])
    const [listParams, setListParams] = useState([])
    const [editable, setEditable] = useState({templates: []})

    useEffect(() => {
        apiGetParams()
            .then(res => {
                setListParams(res.data)
            })

        apiGetFrontCategories()
            .then(res => {
                setCategories(res.data)
            })


    }, [])


    const openModal = (item) => {
        let clone = Object.assign({}, item)

        let found = id => {
            let found = item.templates.find(el => el.templateId.id === id)

            if(found) return found
            return {}
        }

        let listTemplates = listParams.map(item => {
            let copy = Object.assign({}, item)
            return {
                title: copy.title,
                templateId: copy.id,
                main: found(copy.id).main,
                require: found(copy.id).require,
                order: found(copy.id).order
            }
        });
        clone.templates = listTemplates
        setEditable(clone)
        setIsOpen(true)
    }
    const closeModal = () => {
        setIsOpen(false)
        setEditable({})
    }

    const onChange = (name, value, key) => {
        let templatesCopy = [...editable.templates]
        templatesCopy[key][name] = value
        setEditable({...editable, templates: templatesCopy})
    }


    const handleEdit = () => {
        let obj = Object.assign({}, editable)
        obj.сategoryId = obj.id

        let tmp = obj.templates.filter(item => {
            if(item.main || item.order || item.require) return true
        })
        obj.templates = tmp;

        apiEditCategoryTemplare(obj)
            .then(res => {
                let newArr = categories.map((item, index) => {
                    if(item.id === obj.id) {
                        let clone = {...item, templates: res.data.success}
                        return clone
                    } else {
                        return item
                    }
                })

                // let newArr = categories.map(el => (el.id === obj.id ? ({...el, templates: res.data.success}) : el))

                setCategories(newArr)
                closeModal()
            })
            .catch(e => {

            })
    }

    const handleFix = (item) => {
        let obj = item;
        obj.сategoryId = obj.id

        let tmp = [
            {"title":"Sex","templateId":"5e060a51e6346e0027417d58", "order":"1"},
            {"title":"Languages","templateId":"5e060ad6e6346e0027417d5d","order":"1"},
            {"title":"Half day rate","templateId":"5e060c40e6346e0027417d6e","order":"1"},
            {"title":"Full day rate","templateId":"5e060c4fe6346e0027417d6f","order":"1"},
            {"title":"Preparation time","templateId":"5e060ccce6346e0027417d75","order":"1"},
            {"title":"Ability to travel to other countries","templateId":"5e060d2be6346e0027417d7b","order":"1"}
            ]

        obj.templates = tmp;

        apiEditCategoryTemplare(obj)
            .then(res => {
                let newArr = categories.map((item, index) => {
                    if(item.id === obj.id) {
                        let clone = {...item, templates: res.data.success}
                        return clone
                    } else {
                        return item
                    }
                })

                setCategories(newArr)
                closeModal()
            })
            .catch(e => {

            })
    }


    const onDrop = (files) => {
        if (!files[0].name.includes('.xlsx')) showNotification('error', 'Invalid extension')
        setCtegories(files[0])
    }

    const handleSave = () => {

        let data = new FormData();
        data.append("file", fileCategories);
        apiAdminProgrammerCategories( data)
            .then(res => {
                showNotification('info', 'success')
            })
    }

    return (
        <>

            <Header isHomepage />

            <Wrapper p={30} pt={55} >
                <Title mb={10} > Admin page</Title>

                <Label2 mt={30} >Programmer categories</Label2>
                <UploadBtn
                    Btn={<ButtonWithIcon upload>programmer.xls</ButtonWithIcon>}
                    onDropFiles={onDrop}
                />
                <div>{fileCategories.name}</div>
                <Button mt={20} mb={50} green onClick={handleSave}>Upload categories</Button>

            </Wrapper>


            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                ariaHideApp={false}
                className=" modal-params"
            >

                <div className={'mp-wrap'}>
                    <div className="mp-title">
                        {editable.category}
                    </div>
                    <div className="mp-content">
                        {!!editable.templates && editable.templates.map((item, key) =>

                            <div key={item.id} className={'mp-params-list-item'}>
                                <div className={'mp-params-list-item-title'}>{item.title}</div>
                                <div className={'flex-list-params'}>
                                    <div>
                                        <Input value={item.order}
                                               name='order'
                                               onChange={e => onChange(e.target.name, e.target.value, key )}
                                               placeholder="Order"
                                               mb={'5px'}
                                        />
                                    </div>
                                    <div className={'a-for-checkbox'}>
                                        <div style={{color: 'grey', fontSize: '12px'}}>require</div>
                                        <CheckboxWithLabel
                                            checked={item.require}
                                            onChange={e => onChange('require', !item.require, key )}
                                        />
                                    </div>
                                    <div>
                                        <Input value={item.main}
                                               name='main'
                                               onChange={e => onChange(e.target.name, e.target.value, key )}
                                               placeholder="Main"
                                               mb={'5px'}
                                        />
                                    </div>
                                </div>
                            </div>

                        )}
                    </div>

                    <div className="mp-footer">
                        <Button
                            inline
                            blue
                            onClick={handleEdit}
                        >
                           Установить
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

export default Categories;

