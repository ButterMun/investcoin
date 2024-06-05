document.getElementById('ton-connect').style.display = 'none';


async function connectToWallet() {
    const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
        manifestUrl: 'https://buttermun.github.io/tonopoly/tonconnect-manifest.json',
        buttonRootId: 'ton-connect',
        uiOptions: {
            twaReturnUrl: 'https://t.me/tonopolygame_bot'
        }
    });

    try {
        const connectedWallet = await tonConnectUI.connectWallet();
        const accountAddress = connectedWallet.account.address;

        console.log("Wallet address:", accountAddress);
        // После успешного подключения к кошельку, отправьте номер аккаунта на сервер
        // и получите количество монет, если аккаунт уже существует
        // При каждом клике на кнопку, обновите количество монет в базе данных MySQL
    } catch (error) {
        console.error("Error connecting to wallet:", error);
    }
}

// Вызов функции подключения к кошельку при загрузке страницы
connectToWallet();
