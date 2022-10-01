import "../css/components.css";
// Import IMG 1
// import webpackLogo from  '../assets/img/webpack-logo.png';

export const greeting = (username = 'Unknown') => {
    console.log('Creating h1 tag');

    const h1 = document.createElement('h1');
    h1.innerText = `Hi, ${username} !!`;
    document.body.append(h1);

    // Import IMG 1
    // console.log(webpackLogo);
    // const img = document.createElement('img');
    // img.src = webpackLogo;
    // document.body.append(img);
}
