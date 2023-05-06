/*
 * Copyright (c) 2023 NEXTKUBE
 * Project   : JsTip
 * Author    : Ferdi Sahin
 * Date      : 6-5-2023 12:37:51
 * File Name : jstip.js
 */

function jsTip(element) {
    const elements = document.querySelectorAll(element)
    for (let i = 0; i < elements.length; i++) {
        let validPositions = ['top', 'top start', 'top end', 'left', 'left start', 'left end', 'right', 'right start', 'right end', 'bottom', 'bottom start', 'bottom end'],
            tipText = elements[i].dataset.tooltip,
            tipPosition = validPositions.includes(elements[i].dataset.tooltipPosition) ? elements[i].dataset.tooltipPosition : 'top',
            tipBackgroundColor = elements[i].dataset.tooltipBackgroundColor || '#000',
            tipTextColor = elements[i].dataset.tooltipTextColor || '#fff',
            fontSize = elements[i].dataset.tooltipFontSize || '12px'

        const tooltip = document.createElement('div');
        tooltip.className = `tooltip ${tipPosition}`;
        tooltip.textContent = tipText;
        tooltip.style.backgroundColor = tipBackgroundColor;
        tooltip.style.color = tipTextColor;
        tooltip.style.fontSize = fontSize;

        elements[i].style.position = "relative"

        // Show Tip
        function showTip() {
            elements[i].appendChild(tooltip)
        }

        // Hide Tip
        function hideTip() {
            elements[i].removeChild(tooltip);
        }

        elements[i].addEventListener('mouseover', showTip);
        elements[i].addEventListener('mouseout', hideTip);
    }

    // CSS
    const style = document.createElement('style');
    style.textContent = `
            .tooltip {z-index: 999; background: #000;color: #fff;position: absolute;font-size: 12px;padding: 4px;border-radius: 4px;display: inline-block;width: max-content;max-width: 200px;}.tooltip.top.start {left: 0;bottom: 100%;transform: translate(-2px, -5px);}.tooltip.top {left: 50%;bottom: 100%;transform: translate(-50%, -5px);}.tooltip.top.end {left: 100%;bottom: 100%;transform: translate(-100%, -5px);}.tooltip.right.start {left: 100%;top: 0;transform: translate(5px, -2px);}.tooltip.right {left: 100%;top: 50%;transform: translate(5px, -50%);}.tooltip.right.end {left: 100%;top: 100%;transform: translate(5px, -100%);}.tooltip.left.start {right: 100%;top: 0;transform: translate(-5px, -2px);}.tooltip.left {right: 100%;top: 50%;transform: translate(-5px, -50%);}.tooltip.left.end {right: 100%;top: 100%;transform: translate(-5px, -100%);}.tooltip.bottom.start {top: 100%;left: 0;transform: translate(-2px, 5px);}.tooltip.bottom {top: 100%;left: 50%;transform: translate(-50%, 5px);}.tooltip.bottom.end {top: 100%;left: 100%;transform: translate(-100%, 5px);}
        `;
    document.head.appendChild(style);
}