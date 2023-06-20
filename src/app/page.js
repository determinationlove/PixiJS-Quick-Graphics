"use client";

import { Stage, Container, Sprite, Graphics, Text, useApp } from "@pixi/react";
import { PIXI, TextStyle } from "pixi.js";
import { CodeBlock, dracula, CopyBlock } from "react-code-blocks";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import MyGraphic from "./Pixijs-quick-graphics/MyGraphic";
import More from "./Pixijs-quick-graphics/More";
import Header from "./Pixijs-quick-graphics/Header";

export default function PixiJS_QuickGraphics() {
    const [ContainerSize, setContainerSize] = useState([800, 600]); // 沙盒寬高
    const inputRefX = useRef(null);
    const inputRefY = useRef(null);
    const [vertices, setVertices] = useState([]); // 頂點數組

    useEffect(() => {
        console.log("ContainerSize: ", ContainerSize);
    }, [ContainerSize]);

    const updateContainerSize = () => {
        const width = parseInt(inputRefX.current.value, 10);
        const height = parseInt(inputRefY.current.value, 10);
        setContainerSize([width, height]);
    };

    // 點擊時添加點並更新頂點
    const handleClick = (event) => {
        const { offsetX, offsetY } = {
            offsetX: event.nativeEvent.offsetX,
            offsetY: event.nativeEvent.offsetY,
        };
        setVertices((prevVertices) => [...prevVertices, offsetX, offsetY]);
    };

    // 上一步驟
    const removeLast = () => {
        setVertices((prevVertices) =>
            prevVertices.splice(0, vertices.length - 2)
        );
    };

    //清空圖形
    const reset = () => {
        setVertices([]);
    };

    let code = "";
    if (vertices.length !== 0) {
        let num = 0;
        let ans = vertices.reduce((total, value, index) => {
            if (index === 0) {
                return total + "    " + value;
            } else if (index % 2 === 0) {
                num++;
                return total + ",   // 第" + num + "個頂點" + "\n    " + value;
            } else {
                return total + ", " + value;
            }
        }, ""); // 在這裡將起始值設置為空字串

        // 檢查是否為最後一個值，若是則添加註解
        num++;
        ans += "   // 第" + num + "個頂點";

        code = `const vertices = [\n${ans}\n];`;
    } else {
        code = "const vertices = [];";
    }

    return (
        <main
            className="flex flex-col items-center justify-between  text-slate-50"
            style={{
                background:
                    "linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
            }}
        >
            <Header />
            <div className="flex flex-col justify-center items-center p-16">
                <h1 className="flex flex-row text-5xl text-gray-50 font-extrabold">
                    兄弟，在這裡啵兒快設計你的
                    <Image
                        src="/PixiJS-Quick-Graphics/pixijs.svg"
                        width={110}
                        height={200}
                        className="mx-5"
                        style={{
                            color: "white",
                            filter: "drop-Shadow(5px 5px 0px #ffffff)drop-Shadow(-5px -5px 0px #ffffff)drop-Shadow(5px -5px 0px #ffffff)drop-Shadow(-5px 5px 0px #ffffff)drop-Shadow(-3px 0px 0px #ffffff)",
                            backgroundColor: "#ffffff",
                        }}
                    />
                    圖形
                </h1>

                <p className=" text-2xl my-5 font-bold">
                    寶直接幫你算出 path !
                </p>
            </div>

            <div className="flex flex-row w-max min-w-max h-max">
                <div className=" flex flex-col mx-20 w-72 text-xl text-black">
                    寬度設定（橫）：
                    <input type="number" ref={inputRefX} className="mb-5" />
                    高度設定（直）：
                    <input type="text" ref={inputRefY} className="mb-5" />
                    <button
                        className=" bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br ring-4 ring-cyan-300 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-cyan-500/50  font-bold py-2 px-4 rounded my-5 text-lg"
                        onClick={updateContainerSize}
                    >
                        更新 Stage 大小!
                    </button>
                    <div className="text-neutral-300 text-base mt-3">
                        親愛的 TwilightWars 玩家，
                        <br />
                        Stage 就是你各位任務的舞台大小，
                        <br />
                        謝謝你各位 TwilightWars 玩家
                    </div>
                    <div className="flex h-full items-end justify-between py-5">
                        <button
                            className="bg-gradient-to-r from-red-500 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 text-white font-bold py-2 px-4 rounded-full text-lg"
                            onClick={reset}
                        >
                            清空圖形
                        </button>
                        <button
                            className=" text-slate-700 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800  rounded-lg font-bold py-2 px-4 text-lg"
                            onClick={removeLast}
                        >
                            上一步
                        </button>
                    </div>
                </div>

                <div class="width: ContainerSize[0]">
                    <Stage
                        width={ContainerSize[0]}
                        height={ContainerSize[1]}
                        onClick={handleClick}
                    >
                        <Container>
                            <MyGraphic vertices={vertices} />
                        </Container>
                    </Stage>
                </div>

                <div className="flex flex-col mx-20  w-80 h-max">
                    <p className="text-xl mb-5">
                        當前圖形的頂點陣列（即時更新）
                    </p>
                    <CopyBlock
                        text={code}
                        showLineNumbers={true}
                        language="javascript"
                        theme={dracula}
                        wrapLines={true}
                        codeBlock
                    />
                </div>
            </div>
            <div className="flex flex-row w-full min-w-max h-max my-20 bg-amber-400  p-20">
                <More />
            </div>
        </main>
    );
}
