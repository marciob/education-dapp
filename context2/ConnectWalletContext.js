import React, {useContext, useState } from 'react'

const ConnectWalletContext = React.createContext()
const ConnectWalletUpdateContext = React.createContext()

export function useWallet(){
    return useContext(ConnectWalletContext)
}

export function useConnectWallet(){
    return useContext(ConnectWalletUpdateContext)
}

export function ConnectWalletProvider({ children }){
    const [connectedWallet, setConnectedWallet] = useState(1);

    function connectNewWallet(account) {
        setConnectedWallet(account)
    }


    return(
        <ConnectWalletContext.Provider value={connectedWallet}>
            <ConnectWalletUpdateContext.Provider value={connectNewWallet}>
            {children}
            </ConnectWalletUpdateContext.Provider>
        </ConnectWalletContext.Provider>
            
    )


}