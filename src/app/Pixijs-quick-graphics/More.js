"use client";

import React from "react";
import { CodeBlock, dracula, CopyBlock } from "react-code-blocks";
import { Fira_Sans } from 'next/font/google'
const  Fira =  Fira_Sans({
    weight: '400',
    subsets: ['latin'],
})


export default function More() {
    const drawcode = `graphics.drawPolygon(vertices);    // 這個 vertices 就是你 copy 的陣列
graphics.beginFill(0xff0000);    // 上個色吧
graphics.endFill();`;
    const addObj = `app.stage.addChild(graphics);`;

    
    return (
        <div className="flex flex-row w-full justify-between p-20 text-slate-800">
            <h2 className=" text-4xl leading-loose font-semibold">
                那個... 我是超級菜鳥，
                <br />我 copy 陣列之後應該怎麼弄出圖形來？
            </h2>
            <div className="text-lg leading-relaxed inline-block font-semibold">
                不論你是不是親愛的 TwilightWars 玩家，你都會在你的 Pixi App
                中建立至少一個 Graphic <br />
                <br />
                基本上看起來像這樣：
                <div className={Fira.className}>
                    <CopyBlock
                        text="let graphics = new PIXI.Graphics();"
                        showLineNumbers={true}
                        language="javascript"
                        theme={dracula}
                        wrapLines={true}
                        codeBlock
                    />
                </div>
                <br />
                然後你要把它 "畫" 出來：
                <div className={Fira.className}>
                    <CopyBlock
                        text={drawcode}
                        showLineNumbers={true}
                        language="javascript"
                        theme={dracula}
                        wrapLines={true}
                        codeBlock
                    />
                </div>
                <br />
                最後將它添加到你的 Stage 中：
                <div className={Fira.className}>
                    <CopyBlock
                        text={addObj}
                        showLineNumbers={true}
                        language="javascript"
                        theme={dracula}
                        wrapLines={true}
                        codeBlock
                    />
                </div>
            </div>
        </div>
    );
}
