"use strict";
const NotFound = () => {
    return (React.createElement("div", { className: 'not-found', onMouseMove: _onMouseMove },
        React.createElement("div", { className: 'not-found-container' },
            React.createElement("h1", null, "Page not available"),
            React.createElement("p", null,
                "This page is currently in progress, come back here soon to explore it! Perhaps you'd like to head ",
                React.createElement("a", { href: '/Home.html', id: 'spelling-error' },
                    " home?",
                    React.createElement("span", { id: 'spelling-error-window' }, "The main page")),
                " might know!"))));
};
const _onMouseMove = (event) => {
    const { currentTarget, pageX: screenX, pageY: screenY } = event;
    const header = currentTarget.querySelector('h1');
    const paragraph = currentTarget.querySelector('p');
    if (header && paragraph) {
        // The math function is
        // calculate_rotation_X/Y( position_X/Y, screen_width/height )
        // = maxRotation * tanh(roughness * (position_X/Y - screen_width/height))
        const rotateYValue = 30 * Math.tanh(0.0008 * (screenX - getWidth() / 2));
        const rotateY = `rotateY(${rotateYValue}deg)`;
        const rotateXValue = 30 * Math.tanh(0.0008 * (screenY - getHeight() / 2));
        const rotateX = `rotateX(${-rotateXValue}deg)`;
        const transformStyle = `${rotateY} ${rotateX}`;
        header.style.setProperty('transform', transformStyle);
        paragraph.style.setProperty('transform', rotateY);
    }
};
function getWidth() {
    return Math.max(document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.documentElement.clientWidth);
}
function getHeight() {
    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.documentElement.clientHeight);
}
ReactDOM.render(React.createElement(NotFound, null), document.getElementById('root'));