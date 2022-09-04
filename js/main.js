
(function ($) {
    "use strict";


    /*==================================================================
    [ Focus input ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
  
  
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    /*==================================================================
    [ Show pass ]*/
    var showPass = 0;
    $('.btn-show-pass').on('click', function(){
        if(showPass == 0) {
            $(this).next('input').attr('type','text');
            $(this).addClass('active');
            showPass = 1;
        }
        else {
            $(this).next('input').attr('type','password');
            $(this).removeClass('active');
            showPass = 0;
        }
        
    });


})(jQuery);

var web3;
async function Connect(){
    await window.web3.currentProvider.enable();
    web3=new web3(window.web3.currentProvider);
}

// window.userWalletAddress = null
//     const loginButton = document.getElementById('loginButton')
//     const userWallet = document.getElementById('userWallet')

//     function toggleButton() {
//       if (!window.ethereum) {
//         loginButton.innerText = 'MetaMask is not installed'
//         loginButton.classList.remove('bg-purple-500', 'text-white')
//         loginButton.classList.add('bg-gray-500', 'text-gray-100', 'cursor-not-allowed')
//         return false
//       }

//       loginButton.addEventListener('click', loginWithMetaMask)
//     }

//     async function loginWithMetaMask() {
//       const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
//         .catch((e) => {
//           console.error(e.message)
//           return
//         })
//       if (!accounts) { return }

//       window.userWalletAddress = accounts[0]
//       userWallet.innerText = window.userWalletAddress
//       loginButton.innerText = 'Sign out of MetaMask'

//       loginButton.removeEventListener('click', loginWithMetaMask)
//       setTimeout(() => {
//         loginButton.addEventListener('click', signOutOfMetaMask)
//       }, 200)
//     }

//     function signOutOfMetaMask() {
//       window.userWalletAddress = null
//       userWallet.innerText = ''
//       loginButton.innerText = 'Sign in with MetaMask'

//       loginButton.removeEventListener('click', signOutOfMetaMask)
//       setTimeout(() => {
//         loginButton.addEventListener('click', loginWithMetaMask)
//       }, 200)
//     }

//     window.addEventListener('DOMContentLoaded', () => {
//       toggleButton()
//     });