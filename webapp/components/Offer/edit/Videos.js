import React, {useState, useContext, useEffect} from 'react';

import {Title, Footer, TipWrapper2} from "../../Layouts/styledLayouts";
import {Text} from "../../StyledComponents/Text";
import {Input} from "../../controls/Input/Input";
import {Button, ButtonMin} from "../../../components/controls/Button/Button"


const Videos = ({videos, onChange, isLoading, onSave, handleAddInput}) => {
    if (!videos || !videos.length) {
        videos = []
    }


    return (
        <>
            <Title mb={25} >Videos</Title>
            <Text fz={16} mb={30} grey6 >
                Videos are the best option to demonstrate your programmers in action and persuade the clients you are a real professional.
            </Text>

            {
                videos.map((item, key) =>
                    <Input
                        key={key}
                        type='text'
                        name=''
                        value={videos[key]}
                        onChange={(e) => onChange(key, e.target.value)}
                        placeholder="youtube link"
                    />
                )
            }
            <div style={{textAlign: 'right'}}>
                <ButtonMin green inline onClick={handleAddInput}>Add more</ButtonMin>
            </div>


            <TipWrapper2 mt={40} mb={40} >
                <Text fz={12} >
                    Profiles with videos are more likely to attract attention of the potential clients,
                    as they help imagine, visualize and understand the offers better than anything else.
                    Please mind the quality and content of the video.
                </Text>
            </TipWrapper2>

            <Button green loading={isLoading} onClick={onSave} mt={70}>Save</Button>

        </>
    );
};

export default Videos;
