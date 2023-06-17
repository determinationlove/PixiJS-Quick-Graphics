import React from "react";
import { useState } from "react";
import { Stage, Container, Sprite, Graphics, Text, useApp } from "@pixi/react";
import { PIXI, TextStyle } from "pixi.js";



export default function MyGraphic({vertices}) {
    const app = useApp();
    globalThis.__PIXI_APP__ = app;

    
    

    // 畫圖
    const drawGraphics = () => {
        const graphics = (
            <Graphics
                x={0}
                y={0}
                draw={(g) => {
                    g.clear();
                    g.beginFill(0xff3300);
                    g.lineStyle(2, 0xff0000);
                    g.drawPolygon(vertices);
                    g.endFill();
                }}
            />
        );
        return graphics;
    };

    return drawGraphics();
}
