import React, {createContext, useContext} from 'react';
import {useAddress, useContract, useContractWrite, useMetamask} from '@thirdweb-dev/react';
import {ethers} from 'ethers';

const StateContext = createContext();

export const StateContextProvider = ({children}) => {
    const {conntract} = useContract('0xcb58dd7bcd7ADC4d161DbA8575a1d0900563BC23');
    const {mutateAsync: createCampaign} = useContractWrite(contract, 'createCampaign');
}
