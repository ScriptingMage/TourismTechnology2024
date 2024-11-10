import Image from "next/image";
import {Card} from "@/components/ui/card";

export default function TechnicalPage() {
    return (
        <div className="w-full h-full bg-gray-50">
            <h2 className="mb-2 w-full text-center pt-4 text-2xl font-semibold text-gray-900 dark:text-white">
                No Internet? No Problem!
            </h2>
            <div className="grid-cols-2 grid">
                <Card className="space-y-8 border bg-white border-gray-500 p-4 my-4 container mx-auto py-4 max-w-xl">
                    <div className="text-2xl font-bold text-center">
                        The Hardware
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        <img
                            className="h-auto max-w-full"
                            src="https://www.berrybase.at/thumbnail/5f/30/49/1729434756/GSMGPRSGNSSBluetoothHATfrRaspberryPi-61254_1920x1920.jpg?ts=1729434757"
                            alt="image description"
                        />
                        <img
                            className="h-auto max-w-full/2"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Raspberry-Pi-2-Bare-BR.jpg/1280px-Raspberry-Pi-2-Bare-BR.jpg"
                            alt="image description"
                        />

                        <img
                            className="h-auto max-w-full col-span-2"
                            src="https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_120171972?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402"
                            alt="image description"
                        />
                    </div>

                </Card>
                <Card className="space-y-8 border bg-white border-gray-500 p-4 my-4 container mx-auto py-4 max-w-xl">
                    <div className="text-2xl font-bold text-center">
                        The Software
                    </div>
                    <div>

                        <ul className=" text-gray-500 list-none list-inside dark:text-gray-400 ">
                            <li>Raspberry Pi OS</li>
                            <li>python-escpos for managing, viewing POS devices, etc</li>
                            <li>gammu-smsd for receiving, storing, sending messages via GSM</li>
                        </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        <img
                            className="h-auto max-w-full col-span-2"
                            src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Raspberry_Pi_OS_Logo.png"
                            alt="image description"
                        />
                    </div>
                    <div className="">
                        <div className="text-2xl pb-4 font-bold text-center">
                            A rough price estimation
                        </div>
                        <ul className="text-gray-500 list-none list-inside dark:text-gray-400">
                            <li>40€ Raspberry Pi</li>
                            <li>30€ GSM (Raspberry Extension)</li>
                            <li>40€ Brightake Thermal Printer </li>
                            <li>5€ SIM Card</li>
                            <li>5€ Mini SD Card (16gb should be sufficient)</li>
                            <li> 2,50€ Jumper Cables</li>
                        </ul>
                    </div>

                    <div className="text-2xl font-black">
                        Total: ~120€
                    </div>
                </Card>

            </div>
        </div>
    );
}
