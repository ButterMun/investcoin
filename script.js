document.getElementById('ton-connect').style.display = 'none';


async function connectToWallet() {
    const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
        manifestUrl: 'https://buttermun.github.io/investcoin/tonconnect-manifest.json',
        buttonRootId: 'ton-connect',
        uiOptions: {
           // twaReturnUrl: 'https://t.me/tonopolygame_bot'
        }
    });

    try {
        const connectedWallet = await tonConnectUI.connectWallet();
        const accountAddress = connectedWallet.account.address;

        console.log("Wallet address:", accountAddress);
       
        // Обновление профиля
        updateProfile(accountAddress);
    } catch (error) {
        console.error("Error connecting to wallet:", error);
		window.location.reload();
            
    }
}

function updateProfile(walletAddress) {
    // Находим элемент с информацией о профиле
    const profileInfo = document.querySelector('.profile-info');
    
    // Находим элемент с текстом "Status: Inactive" и заменяем его на "Status: Active"
    const statusElement = profileInfo.querySelector(':nth-last-child(5)'); // Ищем предпоследний элемент
    statusElement.textContent = "Status: Active";
    
    // Обновляем адрес кошелька 
    const walletAddressElement = profileInfo.querySelector('p:last-child');
    walletAddressElement.textContent = "Wallet Address: " + walletAddress.substring(0, 5) + '...' + walletAddress.substring(walletAddress.length - 5);

}




// Вызов функции подключения к кошельку при загрузке страницы
connectToWallet();
