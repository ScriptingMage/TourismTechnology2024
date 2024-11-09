import Image from "next/image";

export default function () {
  return (
    <div className="space-y-8 border border-gray-500 p-4 my-4 container mx-auto py-4 max-w-xl">
      <div>
        <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
          Operation No-Internet
        </h2>
        <ul className=" text-gray-500 list-none list-inside dark:text-gray-400 ">
          <li>Raspberry Pi OS</li>
          <li>python-escpos for managing, viewing POS devices, etc</li>
          <li>gammu-smsd for receiving, storing, sending messages via GSM</li>
        </ul>
      </div>

      <div className="">
        <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
          A rough price estimation
        </h2>
        <ul className="text-gray-500 list-none list-inside dark:text-gray-400">
          <li>40€ Raspberry Pi</li>
          <li>30€ GSM (Raspberry Extension)</li>
          <li>5€ SIM Card</li>
          <li>5€ Mini SD Card (16gb should be sufficient)</li>
          <li> 2,50€ Jumper Cables</li>
          <li>Total: 82,50</li>
        </ul>
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
          src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Raspberry_Pi_OS_Logo.png"
          alt="image description"
        />
      </div>
    </div>
  );
}
