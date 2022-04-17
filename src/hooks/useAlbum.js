import { useEffect, useState } from "react"
import { useMoralis,useMoralisWeb3Api } from "react-moralis"


export const useAlbum  = (contract) => {
    const { token } = useMoralisWeb3Api()
    const { isInitialized } = useMoralis()

    const {albumDetails, setAlbumDetails} = useState();

    const fetchAlbum = async () => {
        return await token.getAllTokenIds({
            address: contract,
            chain:"mumbai"
        })
        .then((result) => result)
        
    }

    useEffect(() => {
        const fetchAlbum = async () => {
            return await token.getAllTokenIds({
                address: contract,
                chain:"mumbai"
            })
            .then((result) => result)
            
        }
    
      if (isInitialized) {
          fetchAlbum().then((songs) => {
              setAlbumDetails(songs.result)
              console.log(songs.result);
          })
      }
    
      
    }, [isInitialized, contract, token, setAlbumDetails])
    
    
    return {fetchAlbum,albumDetails}

    
}