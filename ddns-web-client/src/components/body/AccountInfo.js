import { Button, Alert} from "reactstrap"


export default function AccountInfo(props){
    const DDNSContract = props.DDNSContract
    return (
        <div>
            {
            DDNSContract.currentAccount !== null?
          displayAccountInfo(DDNSContract.currentAccount): accountNotConnected(DDNSContract)
            }
        </div>
      )
}

function displayAccountInfo(account){
    return (
        <Alert color="success">
            Using account: {account}
        </Alert>
    )
}

function accountNotConnected(DDNSContract){
    return (
            <Alert color="danger">Wallet Not Connected
            <Button onClick={DDNSContract.requestWalletConnection}>Connect</Button>
            </Alert>
    )
}
