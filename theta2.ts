﻿// Makecode for Theta and Theta2 robots
// Board Revision is 6 for Theta, 7 for Theta2
// Firmware Revision is 5 for Theta2.01 and 6 for Theta2.02

/**
  * Eyeball directions
  */
enum eyePos
{
    //% block="forward"
    Forward,
    //% block="down"
    Down,
    //% block="up"
    Up,
    //% block="left"
    Left,
    //% block="right"
    Right,
    //% block="down-left"
    DownLeft,
    //% block="down-right"
    DownRight,
    //% block="up-left"
    UpLeft,
    //% block="up-right"
    UpRight
}

enum eyeSize
{
    //% block="small"
    Small,
    //% block="large"
    Large
}

enum bfEyes
{
    //% block="left"
    Left,
    //% block="right"
    Right,
    //% block="both"
    Both
}

enum bfMouth
{
    //% block="smile"
    Smile,
    //% block="grin"
    Grin,
    //% block="sad"
    Sad,
    //% block="frown"
    Frown,
    //% block="straight"
    Straight,
    //% block="oooh"
    Oooh,
    //% block="eeeh"
    Eeeh
}

/**
  * Enumeration of motors.
  */
enum RXMotor
{
    //% block="left"
    Left,
    //% block="right"
    Right,
    //% block="both"
    Both
}

/**
  * Enumeration of forward/reverse directions
  */
enum RXDirection
{
    //% block="forward"
    Forward,
    //% block="reverse"
    Reverse
}

/**
  * Enumeration of directions.
  */
enum RXRobotDirection
{
    //% block="left"
    Left,
    //% block="right"
    Right
}

/**
  * Stop modes. Coast or Brake
  */
enum RXStopMode
{
    //% block="no brake"
    Coast,
    //% block="brake"
    Brake
}

/**
  * Enable/Disable for Bluetooth and FireLeds
  */
enum RXBluetooth
{
    //% block="Enable"
    btEnable,
    //% block="Disable"
    btDisable
}

/**
  * Values for buzzer. On or Off
  */
enum RXBuzz
{
    //% block="on"
    On,
    //% block="off"
    Off
}

/**
  * Enumeration of line sensors.
  */
enum RXLineSensor
{
    //% block="left"
    Left,
    //% block="right"
    Right,
    //%block="centre"
    Centre
}

/**
  * Enumeration of light sensors.
  */
enum RXLightSensor
{
    //% block="left"
    Left,
    //% block="right"
    Right
}

/**
  * Enumeration of pulse sensors.
  */
enum RXPulseSensor
{
    //% block="left"
    Left,
    //% block="right"
    Right
}

/**
 * Ping unit for sensor.
 */
enum RXPingUnit
{
    //% block="cm"
    Centimeters,
    //% block="inches"
    Inches,
    //% block="μs"
    MicroSeconds
}

/**
  * Update mode for LEDs
  * setting to Manual requires show LED changes blocks
  * setting to Auto will update the LEDs everytime they change
  */
enum RXMode
{
    //% manual=0
    Manual,
    //% auto=1
    Auto
}

enum RXFireControl
{
    //% block="Microbit"
    RXMicrobit,
    //% block="ATMega"
    RXATMega
}

enum RXModel
{
    Theta1,
    Theta2,
    Auto
}

/**
  * Pre-Defined LED colours
  */
enum RXColors
{
    //% block=red
    Red = 0xff0000,
    //% block=orange
    Orange = 0xffa500,
    //% block=yellow
    Yellow = 0xffff00,
    //% block=green
    Green = 0x00ff00,
    //% block=blue
    Blue = 0x0000ff,
    //% block=indigo
    Indigo = 0x4b0082,
    //% block=violet
    Violet = 0x8a2be2,
    //% block=purple
    Purple = 0xff00ff,
    //% block=white
    White = 0xffffff,
    //% block=black
    Black = 0x000000
}

/**
 * ATMega I/O Pins Modes
 */
enum RXIOMode
{
    //% block="digital input"
    DigitalIn=0,
    //% block="input with pullup"
    InputPullup=1,
    //% block="digital output"
    DigitalOut=2,
    //% block="pwm output"
    PWMOut=3,
    //% block="servo output"
    Servo=4
}

/**
  * IR Key code translations
  */
enum RXirKeys
{
    //% block="any"
    Any=0,
    //% block="0"
    Zero=152,
    //% block="1"
    One=162,
    //% block="2"
    Two=98,
    //% block="3"
    Three=226,
    //% block="4"
    Four=34,
    //% block="5"
    Five=2,
    //% block="6"
    Six=194,
    //% block="7"
    Seven=224,
    //% block="8"
    Eight=168,
    //% block="9"
    Nine=144,
    //% block="*"
    Star=104,
    //% block="#"
    Hash=176,
    //% block="↑"
    Up=24,
    //% block="↓"
    Down=74,
    //% block="←"
    Left=16,
    //% block="→"
    Right=90,
    //% block="OK"
    Ok=56
}


/**
  * IR Key code translations
  */
enum RXirNoAny
{
    //% block="0"
    Zero=152,
    //% block="1"
    One=162,
    //% block="2"
    Two=98,
    //% block="3"
    Three=226,
    //% block="4"
    Four=34,
    //% block="5"
    Five=2,
    //% block="6"
    Six=194,
    //% block="7"
    Seven=224,
    //% block="8"
    Eight=168,
    //% block="9"
    Nine=144,
    //% block="*"
    Star=104,
    //% block="#"
    Hash=176,
    //% block="↑"
    Up=24,
    //% block="↓"
    Down=74,
    //% block="←"
    Left=16,
    //% block="→"
    Right=90,
    //% block="OK"
    Ok=56
}


/**
 * Custom blocks
 */

//% weight=50 color=#e7660b icon="\uf139"
//% groups='["New style blocks","Basic","Advanced","Special","Ultrasonic","Line Sensor","5x5 Matrix","BitFace","OLED 128x64","Old style blocks"]'
namespace theta
{
    let fireBand: fireled.Band;
    let _updateMode = RXMode.Auto;
    let btDisabled = true;
    let matrix5: fireled.Band;
    let bitface: fireled.Band;
    let mouthSmile: number[] = [0,1,2,3,4,5];
    let mouthGrin: number[] = [0,1,2,3,4,5,10,11,12,13];
    let mouthSad: number[] = [0,5,6,7,8,9];
    let mouthFrown: number[] = [0,5,6,7,8,9,10,11,12,13];
    let mouthStraight: number[] = [0,5,10,11,12,13];
    let mouthOooh: number[] = [1,2,3,4,6,7,8,9,10,13];
    let mouthEeeh: number[] = [0,1,2,3,4,5,6,7,8,9];
    let palette: number[] = [0xFF0000, 0x659900, 0x18E600, 0x80FF00, 0x00FF00, 0xFF8000, 0xD82600, 0xB24C00, 0x00FFC0, 0x00FF80, 0xFFC000, 0xFF0080, 0xFF00FF, 0xB09EFF, 0x00FFFF, 0xFFFF00, 0x8000FF, 0x0080FF, 0x0000FF, 0xFFFFFF, 0xFF8080, 0x80FF80, 0x40C0FF, 0x999999, 0x000000];
    let oled: firescreen.Screen;
    let leftBias = 0;
    let rightBias = 0;

    let _model = RXModel.Auto;
    let boardRevision = -1
    let firmwareRevision = 0
    const i2cACK =   0x55;	// i2c acknowledge character for terminating motor commands
    let fireControl = 0		// FireLeds controlled by Microbit by default

    let startFlash = 25;

    // Motor Pins only used on Theta1, not Theta2
    const lMotorD0 = DigitalPin.P14;
    const lMotorD1 = DigitalPin.P13;
    const lMotorA0 = AnalogPin.P14;
    const lMotorA1 = AnalogPin.P13;
    const rMotorD0 = DigitalPin.P16;
    const rMotorD1 = DigitalPin.P15;
    const rMotorA0 = AnalogPin.P16;
    const rMotorA1 = AnalogPin.P15;

    const NUMLEDS = 14;

// ----------------------------------------------------------
// ATMega definitions

    const reservedBytes = 50	// EEPROM bytes used for system (eg. line sensor thresholds)

// OUTPUT REGISTERS
    const i2cATMega   = 0x22
    const FIREDATA    =  0
    const FIREBRT     =  1
    const FIREUPDT    =  2
    const IO_0_CFG    =  3
    const IO_1_CFG    =  4
    const IO_2_CFG    =  5
    const IO_3_CFG    =  6
    const UPDATEMODE  =  9
    const SHIFTLEDS   = 10
    const ROTATELEDS  = 11
    const RAINBOW     = 12
    const SETPIXEL    = 13
    const IO_0_DATA   = 14
    const IO_1_DATA   = 15
    const IO_2_DATA   = 16
    const IO_3_DATA   = 17
    const ATMRESET    = 20
    // Theta2 only
    const LPULSEL     = 21  // left pulse count low word
    const LPULSEH     = 22  // left pulse count high word
    const RPULSEL     = 23
    const RPULSEH     = 24

// THETA2 New I2C Commands
    const STOP	     = 21
    const DRIVE      = 22  // Speed +/- 100%
    const SPIN       = 23  // Speed +/- 100%
    const DRIVEDIST  = 24  // Speed, Distance (cm)
    const SPINANGLE  = 25  // Speed, Angle (degrees)
    const ARC        = 26  // Speed, Radius
    const ARCANGLE   = 27  // Speed, Radius, Angle
    const DIRECTMODE = 28  // Speed, Motor. For compatability with older independent motor settings
    const INDICATOR  = 29  // Indicator (L/R), Value
    const SETTHRESH  = 30  // Theshold, hysteresis
    const PIDENABLE  = 31  // false/true, 0/1
    const HEADLIGHTS = 32  // Off, On
    const RESETWHEEL = 33  // Left, Right, Both

// THETA2 IR constants
    const irPin = DigitalPin.P16
    const irEvent = 1995

// INPUT REGISTERS
    const VERREV =  0
    const ALINEL =  1
    const ALINER =  2
    const LIGHTL =  3
    const LIGHTR =  4
    const DIAL =    5
    const PSU =     6
    const INP0 =    7
    const INP1 =    8
    const INP2 =    9
    const INP3 =   10
    const DLINEL = 11
    const DLINER = 12
    const DLINEC = 13
    const ALINEC = 14
    const ACKNAK = 20

// ----------------------------------------------------------

    let setupATM = false;
    let i2cData2 = pins.createBuffer(2);
    let i2cData3 = pins.createBuffer(3);
    let i2cData4 = pins.createBuffer(4);
    let i2cData5 = pins.createBuffer(5);
    let i2cData6 = pins.createBuffer(6);

    function clamp(value: number, min: number, max: number): number
    {
        return Math.max(Math.min(max, value), min);
    }

    // Helper function for Theta2 checks
    function isTheta2(): boolean
    {
	return getModel() == RXModel.Theta2;
    }

    // Commands via I2C on ATMega
    function sendCommand2(command: number, para0: number): void
    {
	i2cData2[0] = command;
        i2cData2[1] = para0;
        pins.i2cWriteBuffer(i2cATMega, i2cData2);
    }

    function sendCommand3(command: number, para0: number, para1: number): void
    {
	i2cData3[0] = command;
        i2cData3[1] = para0;
        i2cData3[2] = para1;
        pins.i2cWriteBuffer(i2cATMega, i2cData3);
    }

    function sendCommand4(command: number, para0: number, para1: number, para2: number): void
    {
	i2cData4[0] = command;
        i2cData4[1] = para0;
        i2cData4[2] = para1;
        i2cData4[3] = para2;
        pins.i2cWriteBuffer(i2cATMega, i2cData4);
    }

    function sendCommand5(command: number, para0: number, para1: number, para2: number, para3: number): void
    {
	i2cData5[0] = command;
        i2cData5[1] = para0;
        i2cData5[2] = para1;
        i2cData5[3] = para2;
        i2cData5[4] = para3;
        pins.i2cWriteBuffer(i2cATMega, i2cData5);
    }

    function sendCommand6(command: number, para0: number, para1: number, para2: number, para3: number, para4: number): void
    {
	i2cData6[0] = command;
        i2cData6[1] = para0;
        i2cData6[2] = para1;
        i2cData6[3] = para2;
        i2cData6[4] = para3;
        i2cData6[5] = para4;
        pins.i2cWriteBuffer(i2cATMega, i2cData6);
    }

    function readSensor(sensor: number): number
    {
        pins.i2cWriteNumber(i2cATMega, sensor, NumberFormat.Int8LE, false);
        return (pins.i2cReadNumber(i2cATMega, NumberFormat.UInt16LE));
    }

// Block to enable Bluetooth and disable FireLeds on accessories (doesn't affect built in Fireleds)
    /**
      * Enable/Disable Bluetooth support by disabling/enabling FireLeds
      * @param enable enable or disable Blueetoth
    */
    //% blockId="EnableBluetooth"
    //% block="%enable|th235 Bluetooth"
    //% blockGap=8
    export function enableBluetooth(enable: RXBluetooth)
    {
        if (enable == RXBluetooth.btEnable)
            btDisabled = false;
        else
            btDisabled = true;
    }

// Blocks for selecting Theta Model
    /**
      * Force Model of Theta (Determines Pins used)
      * @param model Model of Theta; Theta1 or Theta2
      */
    //% blockId="setThetaModel"
    //% block="select Theta model%model"
    //% weight=100
    //% subcategory=Theta_Model
    export function select_model(model: RXModel): void
    {
        _model = model;
	if(_model == RXModel.Theta2)
	    startFlash = 50
    }

    /**
      * get Model of Theta
      */
    //% blockId="thetaModel"
    //% block="Theta model"
    //% weight=90
    //% subcategory=Theta_Model
    export function getModel(): RXModel
    {
        getBoardRevision();
        if (_model == RXModel.Auto)
        {
            if (boardRevision == 6)
                select_model(RXModel.Theta1);
	    else if (boardRevision == 7)
		select_model(RXModel.Theta2);
        }
        return _model;
    }

    /**
      * Get numeric value of Theta Model
      *
      * @param model Theta Model eg: RXModel.Theta1
      */
    //% blockId="thetaModels"
    //% block=%model
    //% weight=80
    //% subcategory=Theta_Model
    export function RXModels(model: RXModel): number
    {
        return model;
    }

    /**
      * Get board revision
      */
    //% blockId="getBoardRevision"
    //% block="board revision"
    //% weight=70
    //% subcategory=Theta_Model
    export function getBoardRevision(): number
    {
	// 6 = Theta1, 7 = Theta2
        if (boardRevision == -1)	// first time requesting
	{
	    let revisions = pins.i2cReadNumber(i2cATMega, NumberFormat.UInt16LE, false)
	    boardRevision = (revisions >> 8) & 0xff
	    firmwareRevision = revisions & 0xff
	    if(boardRevision == 7) // Theta2
		sendCommand2(PIDENABLE, 1)	// first access to Theta2, so ensure PID loop is enabled
	}
        return boardRevision;
    }

    /**
      * Get firmware revision
      */
    //% blockId="getFirmwareRevision"
    //% block="firmware revision"
    //% weight=60
    //% subcategory=Theta_Model
    export function getFirmwareRevision(): number
    {
	getBoardRevision()
        return firmwareRevision
    }

    /**
      * Set FireLeds control method
      * @param fireCon are the FireLeds controlled by Microbit or ATMega
      */
    //% blockId="setFireControl"
    //% block="FireLeds controlled by%fireCon"
    //% weight=50
    //% subcategory=Theta_Model
    export function setFireControl(fireCon: RXFireControl): void
    {
        fireControl = fireCon
    }

// Motor Blocks
    // slow PWM frequency for slower speeds to improve torque - only Theta1
    function setPWM(speed: number): void
    {
	if(! isTheta2())
	{
            if (speed < 200)
                pins.analogSetPeriod(AnalogPin.P0, 60000);
            else if (speed < 300)
                pins.analogSetPeriod(AnalogPin.P0, 40000);
            else
                pins.analogSetPeriod(AnalogPin.P0, 30000);
	}
    }

    /**
      * Move robot forward (or backward) at speed.
      * @param direction Move Forward or Reverse
      * @param speed speed of motor between 0 and 100. eg: 60
      */
    //% blockId="RobotGo" block="go%direction|at speed%speed|\\%"
    //% speed.min=0 speed.max=100
    //% weight=100
    //% subcategory=Motors
    //% blockGap=8
    export function robotGo(direction: RXDirection, speed: number): void
    {
	if(isTheta2())
	    sendCommand2(DRIVE, (direction == RXDirection.Reverse) ? -speed : speed);
	else
            motorMove(RXMotor.Both, direction, speed);
    }

    /**
      * Move robot forward (or backward) at speed for milliseconds
      * @param direction Move Forward or Reverse
      * @param speed speed of motor between 0 and 100. eg: 60
      * @param milliseconds duration in milliseconds to drive forward for, then stop. eg: 400
      */
    //% blockId="RobotGoms" block="go%direction|at speed%speed|\\% for%milliseconds|ms"
    //% speed.min=0 speed.max=100
    //% weight=90
    //% subcategory=Motors
    //% blockGap=8
    export function robotGoms(direction: RXDirection, speed: number, milliseconds: number): void
    {
        robotGo(direction, speed);
        basic.pause(milliseconds);
        robotStop(RXStopMode.Coast);
    }

    /**
      * Rotate robot in direction at speed
      * @param direction direction to turn
      * @param speed speed of motors (0 to 100). eg: 60
      */
    //% blockId="RobotRotate" block="spin%direction|at speed%speed|\\%"
    //% speed.min=0 speed.max=100
    //% weight=80
    //% subcategory=Motors
    //% blockGap=8
    export function robotRotate(direction: RXRobotDirection, speed: number): void
    {
	if(isTheta2())
	    sendCommand2(SPIN, (direction == RXRobotDirection.Right) ? -speed : speed);
	else
	{
            if (direction == RXRobotDirection.Left)
            {
                motorMove(RXMotor.Left, RXDirection.Reverse, speed);
	        motorMove(RXMotor.Right, RXDirection.Forward, speed);
	    }
            else if (direction == RXRobotDirection.Right)
            {
		motorMove(RXMotor.Left, RXDirection.Forward, speed);
		motorMove(RXMotor.Right, RXDirection.Reverse, speed);
            }
	}
    }

    /**
      * Rotate robot in direction at speed for milliseconds.
      * @param direction direction to spin
      * @param speed speed of motor between 0 and 100. eg: 60
      * @param milliseconds duration in milliseconds to spin for, then stop. eg: 400
      */
    //% blockId="RobotRotatems" block="spin%direction|at speed%speed|\\% for%milliseconds|ms"
    //% speed.min=0 speed.max=100
    //% weight=70
    //% subcategory=Motors
    //% blockGap=8
    export function robotRotatems(direction: RXRobotDirection, speed: number, milliseconds: number): void
    {
        robotRotate(direction, speed);
        basic.pause(milliseconds);
        robotStop(RXStopMode.Coast);
    }

    /**
      * Stop robot by coasting slowly to a halt or braking
      * @param mode Brakes on or off
      */
    //% blockId="RobotStop" block="stop with%mode"
    //% weight=60
    //% subcategory=Motors
    //% blockGap=8
    export function robotStop(mode: RXStopMode): void
    {
        let stopMode = 0;
        if (mode == RXStopMode.Brake)
            stopMode = 1;
	if(isTheta2())
	    sendCommand2(STOP, stopMode);
	else
	{
            pins.digitalWritePin(lMotorD0, stopMode);
            pins.digitalWritePin(lMotorD1, stopMode);
            pins.digitalWritePin(rMotorD0, stopMode);
            pins.digitalWritePin(rMotorD1, stopMode);
	}
    }

/* Removed for v1.1
    function createCalib(speed: number): void
    {
        if (! initCalib)
        {
            loadCalibration();
            initCalib = true;
        }
        let calibVal = 0;
        if (speed < 60)
            calibVal = calibration[1] - ((60 - speed)/30) * (calibration[1] - calibration[0]);
        else
            calibVal = calibration[2] - ((90 - speed)/30) * (calibration[2] - calibration[1]);
        leftCalib = 0;
        rightCalib = 0;
        if (calibVal < 0)
            leftCalib = Math.abs(calibVal);
        else
            rightCalib = calibVal;
    }
*/

    /**
      * Move individual motors forward or reverse
      * @param motor motor to drive
      * @param direction select forwards or reverse
      * @param speed speed of motor between 0 and 100. eg: 60
      */
    //% blockId="MotorMove" block="move%motor|motor(s)%direction|at speed%speed|\\%"
    //% weight=50
    //% speed.min=0 speed.max=100
    //% subcategory=Motors
    //% blockGap=8
    export function motorMove(motor: RXMotor, direction: RXDirection, speed: number): void
    {
        let lSpeed = 0;
        let rSpeed = 0;
	getModel();
        speed = clamp(speed, 0, 100);
	// Removed v1.1: createCalib(speed); // sets bias values for "DriveStraight"
	if(isTheta2())
	{
	    sendCommand4(DIRECTMODE, speed, direction, motor); // for compatabilty only, no PIDC control
	}
	else
	{
            speed = speed * 10.23
            setPWM(speed);
    	/* Removed v1.1
            if (leftBias == 0 && rightBias == 0)
            {
                lSpeed = Math.round(speed * (100 - leftCalib) / 100);
                rSpeed = Math.round(speed * (100 - rightCalib) / 100);
            }
            else*/
            {
                lSpeed = Math.round(speed * (100 - leftBias) / 100);
                rSpeed = Math.round(speed * (100 - rightBias) / 100);
            }

            if ((motor == RXMotor.Left) || (motor == RXMotor.Both))
            {
                if (direction == RXDirection.Forward)
                {
                    pins.analogWritePin(lMotorA0, lSpeed);
                    pins.analogWritePin(lMotorA1, 0);
                }
                else
                {
                    pins.analogWritePin(lMotorA0, 0);
                    pins.analogWritePin(lMotorA1, lSpeed);
                }
            }
            if ((motor == RXMotor.Right) || (motor == RXMotor.Both))
            {
                if (direction == RXDirection.Forward)
                {
                    pins.analogWritePin(rMotorA0, rSpeed);
                    pins.analogWritePin(rMotorA1, 0);
                }
                else
                {
                    pins.analogWritePin(rMotorA0, 0);
                    pins.analogWritePin(rMotorA1, rSpeed);
                }
            }
	}
    }

    /**
      * Move individual motors forward or reverse for milliseconds
      * @param motor motor to drive
      * @param direction Move Forward or Reverse
      * @param speed speed of motor between 0 and 100. eg: 60
      * @param duration duration in milliseconds to drive forward for, then stop. eg: 400
      */
    //% blockId="MotorMovems"
    //% block="move%motor|motor(s)%direction|at speed%speed|for%duration|ms"
    //% inlineInputMode=inline
    //% duration.shadow=timePicker
    //% speed.min=0 speed.max=100
    //% weight=45
    //% subcategory=Motors
    //% blockGap=8
    export function motorMovems(motor: RXMotor, direction: RXDirection, speed: number, duration: number): void
    {
        motorMove(motor, direction, speed);
        basic.pause(duration);
        robotStop(RXStopMode.Coast);
    }


    /**
      * Set left/right bias to match motors
      * @param direction direction to turn more (if robot goes right, set this to left)
      * @param bias percentage of speed to bias with eg: 10
      */
    //% blockId="MotorBias" block="bias%direction|by%bias|\\%"
    //% bias.min=0 bias.max=80
    //% weight=40
    //% subcategory=Motors
    //% blockGap=8
    export function motorBias(direction: RXRobotDirection, bias: number): void
    {
        bias = clamp(bias, 0, 80);
        if (direction == RXRobotDirection.Left)
        {
            leftBias = bias;
            rightBias = 0;
        }
        else
        {
            leftBias = 0;
            rightBias = bias;
        }
    }


// Functions Only Applicable to Theta2

    function waitForAck(): void
    {
	basic.pause(10);
	while(pins.i2cReadNumber(i2cATMega, NumberFormat.UInt16LE) != i2cACK)	// read register is always ACKNAK when waiting is required
	//while (readSensor(ACKNAK) != i2cACK)
	    basic.pause(10);
    }

    /**
      * Move robot at selected speed for selected distance in cm
      * @param direction Move Forward or Reverse
      * @param speed speed of motor between 0 and 100. eg: 60
      * @param distance to travel in cm. eg: 15
      */
    //% blockId="RXGocm" block="go%direction|at speed%speed|\\% for%distance|cm"
    //% speed.min=0 speed.max=100
    //% weight=100
    //% subcategory=Theta2
    //% group=Motors
    export function gocm(direction: RXDirection, speed: number, distance: number): void
    {
	if(isTheta2())
	{
	    sendCommand4(DRIVEDIST, (direction == RXDirection.Reverse) ? -speed : speed, distance & 0xff, distance >> 8);
	    // wait for function complete
	    waitForAck();
	}
    }

    /**
      * Spin robot at selected speed for a selected angle and in selected direction
      * @param direction direction to turn
      * @param speed speed of motors (0 to 100). eg: 60
      * @param angle degrees to spin eg: 90
      */
    //% blockId="RXSpinDeg" block="spin%direction|at speed%speed|\\% for%angle|degrees"
    //% speed.min=0 speed.max=100
    //% weight=90
    //% subcategory=Theta2
    //% group=Motors
    export function spinDeg(direction: RXRobotDirection, speed: number, angle: number): void
    {
	if(isTheta2())
	{
	    sendCommand4(SPINANGLE, (direction == RXRobotDirection.Right) ? -speed : speed, angle & 0xff, angle >> 8);
	    // wait for function complete
	    waitForAck();
	}
    }

    /**
      * Move robot in an arc with selected direction, speed and radius
      * @param direction Move Forward or Reverse
      * @param speed speed of motor between 0 and 100. eg: 60
      * @param radius of arc in cm. eg: 25
      */
    //% blockId="RXArc" block="move in an arc%direction|at speed%speed|\\% radius%radius|cm"
    //% speed.min=0 speed.max=100
    //% weight=80
    //% subcategory=Theta2
    //% group=Motors
    export function arc(direction: RXDirection, speed: number, radius: number): void
    {
	if(isTheta2())
	    sendCommand4(ARC, (direction == RXDirection.Reverse) ? -speed : speed, radius & 0xff, radius >> 8);
    }

    /**
      * Move robot in an arc with selected direction, speed and radius - for a defined angle
      * @param direction Move Forward or Reverse
      * @param speed speed of motor between 0 and 100. eg: 60
      * @param radius of arc in cm. eg: 25
      * @param angle of turn eg: 90
      */
    //% blockId="RXArcDeg" block="move in an arc%direction|at speed%speed|\\% radius%radius|cm for%angle|degrees"
    //% speed.min=0 speed.max=100
    //% weight=70
    //% inlineInputMode=inline
    //% subcategory=Theta2
    //% group=Motors
    export function arcdeg(direction: RXDirection, speed: number, radius: number, angle: number): void
    {
	if(isTheta2())
	{
	    sendCommand6(ARCANGLE, (direction == RXDirection.Reverse) ? -speed : speed, radius & 0xff, radius >> 8, angle & 0xff, angle >>8);
	    // wait for function complete
	    waitForAck();
	}
    }

    /**
      * Drive robot left or right depending on direction parameter. 
      * @param direction from -100 for full left, through 0 for straight ahead, to +100 for full right
      * @param speed speed of motor between 0 and 100. eg: 60
      */
    //% blockId="RXSteer" block="drive in direction%direction|at speed%speed"
    //% speed.min=0 speed.max=100
    //% direction.min=-100 direction.max=100
    //% weight=60
    //% subcategory=Theta2
    //% group=Motors
    export function steer(direction: number, speed: number): void
    {
	if(isTheta2())
	{
	    direction = clamp(direction, -100, 100)
	    speed = clamp(speed, 0, 100)
	    let speedL = (direction > 0) ? speed : ((100 + direction) * speed) / 100
	    let speedR = (direction < 0) ? speed : ((100 - direction) * speed) / 100
	    sendCommand4(DIRECTMODE, speedL, 0, 0)
	    sendCommand4(DIRECTMODE, speedR, 0, 1)
	}
    }

    /**
      * Enable or Disable the PID motor control. Turn Off when line following etc.
      * @param enable state of control (On or Off)
      */
    //% blockId="RXPidEnable" block="PID control%enable"
    //% enable.shadow="toggleOnOff"
    //% weight=60
    //% subcategory=Theta2
    //% group=Motors
    export function enablePID(enable: boolean): void
    {
        let enPid = enable ? 1 : 0;
	if(isTheta2())
	    sendCommand2(PIDENABLE, enPid);
    }

    /**
      * Read the value of selected wheel sensor
      * @param sensor left or right wheel sensor
      */
    //% blockId="RXWheelSensor" block="%sensor|wheel sensor"
    //% weight=50
    //% subcategory=Theta2
    //% group=Motors
    export function wheelSensor(sensor: RXPulseSensor): number
    {
	let loVal=0
	let hiVal=0
	if(sensor == RXPulseSensor.Left)
	{
	    loVal = readSensor(LPULSEL)
	    hiVal = readSensor(LPULSEH)
	}
	else
	{
	    loVal = readSensor(RPULSEL)
	    hiVal = readSensor(RPULSEH)
	}
        return loVal + (hiVal << 16)
    }

    /**
      * Reset the selected wheel sensors
      * @param sensor left, right or both wheel sensors
      */
    //% blockId="RXResetWheelSensor" block="reset %sensor|wheel sensor"
    //% weight=50
    //% subcategory=Theta2
    //% group=Motors
    export function resetWheelSensor(sensor: RXMotor): void
    {
	sendCommand2(RESETWHEEL, sensor)
    }

    /**
      * Read the line sensors in digital mode. Returns True (black line detected) or False
      * @param sensor left or right line sensors
      */
    //% blockId="RXDigitalLine" block="%sensor|digital line sensor"
    //% weight=95
    //% subcategory=Theta2
    //% group="Line sensor"
    export function readLineDigital(sensor: RXLineSensor): boolean
    {
	if(isTheta2())
	    return (readSensor(sensor + DLINEL)==0);	// Digital Line sensors contiguous: 11, 12, 13
	else
	    return false;
    }

    /**
      * Line position merge. -100 full left, 0 centre, +100 full right
      */
    //% blockId="RXMergeLine" block="line position"
    //% weight=80
    //% subcategory=Theta2
    //% group="Line sensor"
    export function mergeLinePosition(): number
    {
      // Read all analog sensors
      let left = 1023 - readSensor(ALINEL)
      let right = 1023 - readSensor(ALINER)
      let centre = Math.min(left, right)
      if(getFirmwareRevision() == 6)
          centre = 1023 - readSensor(ALINEC)
      // subtract minimum value
      let lineMin = Math.min(left, Math.min(right, centre))
      left = left - lineMin
      right = right - lineMin
      centre = centre - lineMin
      // scale all values so max = 100
      let lineMax = Math.max(left, Math.max(right, centre))
      left = (left * 100) / lineMax
      right = (right * 100) / lineMax
      centre = (centre * 100) / lineMax
      // return the difference between left and right averages
      let posL = (left == 0) ? 0 : (left * left) / (left + centre)
      let posR = (right == 0) ? 0 : (right * right) / (right + centre)
      return Math.floor(posR - posL)
    }

    /**
      * Set threshold and hysteresis for line sensors
      * @param threshold mid point between black and white. eg: 100
      * @param hysteresis deadband either side of mid point. eg: 10
      */
    //% blockId="RXSetThreshold" block="line sensor threshold%threshold| hysteresis%hysteresis"
    //% weight=90
    //% subcategory=Theta2
    //% group="Line sensor"
    export function setThreshold(threshold: number, hysteresis: number): void
    {
	if(isTheta2())
	    sendCommand5(SETTHRESH, threshold & 0xff, threshold >> 8, hysteresis & 0xff, hysteresis >> 8);
    }

// Infrared Receiver Blocks

    /**
      * Action on IR message received
      */
    //% weight=100
    //% blockId=onIrEvent
    //% block="on IR key%key"
    //% subcategory=Theta2
    //% group=InfraRed
    export function onIREvent(event: RXirKeys, handler: Action)
    {
        irCore.initEvents(irPin)
        control.onEvent(irEvent, <number>event, handler)
    }

    /**
     * Check if IR key pressed
     */
    //% weight=90
    //% blockId=IRKey
    //% block="IR key%key|was pressed"
    //% subcategory=Theta2
    //% group=InfraRed
    export function irKey(key: RXirNoAny): boolean
    {
        return (irCore.LastCode() == key)
    }

    /**
      * Last IR Code received as number
      */
    //% weight=80
    //% blockId=IRCode
    //% block="IR code"
    //% subcategory=Theta2
    //% group=InfraRed
    export function irCode(): number
    {
	return irCore.LastCode()
    }

    /**
      * IR Key Codes as number
      */
    //% weight=70
    //% blockId=IRKeyCode
    //% block="IR Key%key"
    //% subcategory=Theta2
    //% group=InfraRed
    export function irKeyCode(key: RXirNoAny): number
    {
	return key
    }

    /**
      * Turn Headlights On/Off
      * @param state headlights on (1) or off (0)
      */
    //% weight=110
    //% blockId=Headlights
    //% block="turn headlights%state"
    //% state.shadow="toggleOnOff"
    //% subcategory=Theta2
    //% group=General
    export function headlights(state: boolean): void
    {
        if(isTheta2())
	{
	    sendCommand2(HEADLIGHTS, state?1:0)
	}
    }


// Inbuilt FireLed Blocks - Controlled via ATMega

    /**
      * Sets all LEDs to a given color (range 0-255 for r, g, b).
      * @param rgb RGB color of the LED
      */
    //% blockId="LedsColour" block="set all LEDs to%rgb=RXColours"
    //% weight=100
    //% subcategory=FireLeds
    //% group=Basic
    //% blockGap=8
    export function ledsColor(rgb: number)
    {
	if(isTheta2())
	    sendCommand6(SETPIXEL, (_updateMode == RXMode.Auto) ? 1: 0, NUMLEDS, rgb>>16, (rgb>>8)& 0xff, rgb&0xff)
	else
	    sendCommand5((_updateMode == RXMode.Auto) ? 1: 0, NUMLEDS, rgb>>16, (rgb>>8)& 0xff, rgb&0xff)
    }

    /**
      * Clear all leds.
      */
    //% blockId="LedClear" block="clear all LEDs"
    //% weight=90
    //% subcategory=FireLeds
    //% group=Basic
    //% blockGap=8
    export function ledClear(): void
    {
	if(isTheta2())
	    sendCommand6(SETPIXEL, (_updateMode == RXMode.Auto) ? 1: 0, NUMLEDS, 0, 0, 0)
	else
	    sendCommand5((_updateMode == RXMode.Auto) ? 1: 0, NUMLEDS, 0, 0, 0)
    }

    /**
     * Set single LED to a given color (range 0-255 for r, g, b).
     *
     * @param ledId position of the LED (0 to 11)
     * @param rgb RGB color of the LED
     */
    //% blockId="SetPixel" block="set LED at%ledId|to%rgb=RXColours"
    //% weight=80
    //% subcategory=FireLeds
    //% group=Basic
    //% blockGap=8
    export function setPixel(ledId: number, rgb: number): void
    {
	if(isTheta2())
	    sendCommand6(SETPIXEL, (_updateMode == RXMode.Auto) ? 1: 0, ledId, rgb>>16, (rgb>>8)& 0xff, rgb&0xff)
	else
	    sendCommand5((_updateMode == RXMode.Auto) ? 1: 0, ledId, rgb>>16, (rgb>>8)& 0xff, rgb&0xff)
    }

    /**
     * Shows a rainbow pattern on all LEDs.
     * @param dir direction. Up is Red at 0 to Purple at 13
     */
    //% blockId="LedRainbow" block="set LED rainbow%dir"
    //% weight=70
    //% dir.shadow="toggleUpDown"
    //% subcategory=FireLeds
    //% group=Basic
    //% blockGap=8
    export function ledRainbow(dir: boolean): void
    {
	sendCommand2(RAINBOW, dir?1:0);
    }

    /**
     * Shift LEDs and clear with zeros.
     * @param dir direction of shift. Up is 0 to 1
     */
    //% blockId="LedShift" block="shift LEDs%dir"
    //% weight=60
    //% dir.shadow="toggleUpDown"
    //% subcategory=FireLeds
    //% group=Basic
    //% blockGap=8
    export function ledShift(dir: boolean): void
    {
	sendCommand2(SHIFTLEDS, dir?1:0);
    }

    /**
     * Rotate LEDs
     * @param dir direction of rotation. Up is 0 to 1
     */
    //% blockId="LedRotate" block="rotate LEDs%dir"
    //% weight=50
    //% dir.shadow="toggleUpDown"
    //% subcategory=FireLeds
    //% group=Basic
    //% blockGap=8
    export function ledRotate(dir: boolean): void
    {
	sendCommand2(ROTATELEDS, dir?1:0);
    }

    // Advanced blocks

    /**
     * Set the brightness of the LEDs
     * @param brightness a measure of LED brightness in 0-255. eg: 40
     */
    //% blockId="LedBrightness" block="set LED brightness%brightness"
    //% brightness.min=0 brightness.max=255
    //% weight=100
    //% subcategory=FireLeds
    //% group=Advanced
    //% blockGap=8
    export function ledBrightness(brightness: number): void
    {
	sendCommand2(FIREBRT, brightness);
    }

    /**
      * Set LED update mode (Manual or Automatic)
      * @param updateMode setting automatic will show LED changes automatically
      */
    //% blockId="setupdateMode" block="set%updateMode|update mode"
    //% weight=90
    //% subcategory=FireLeds
    //% group=Advanced
    //% blockGap=8
    export function setUpdateMode(updateMode: RXMode): void
    {
        _updateMode = updateMode;
	sendCommand2(UPDATEMODE, updateMode);
    }

    /**
      * Show LED changes
      */
    //% blockId="BBledShow" block="show FireLed changes"
    //% weight=80
    //% subcategory=FireLeds
    //% group=Advanced
    //% blockGap=8
    export function ledShow(): void
    {
	sendCommand2(FIREUPDT, 0);
    }

    /**
      * Get numeric value of colour
      * @param color Standard RGB Led Colours eg: #ff0000
      */
    //% blockId="RXColours" block=%color
    //% blockHidden=false
    //% weight=70
    //% subcategory=FireLeds
    //% group=Advanced
    //% blockGap=8
    //% shim=TD_ID colorSecondary="#e7660b"
    //% color.fieldEditor="colornumber"
    //% color.fieldOptions.decompileLiterals=true
    //% color.defl='#ff0000'
    //% color.fieldOptions.colours='["#FF0000","#659900","#18E600","#80FF00","#00FF00","#FF8000","#D82600","#B24C00","#00FFC0","#00FF80","#FFC000","#FF0080","#FF00FF","#B09EFF","#00FFFF","#FFFF00","#8000FF","#0080FF","#0000FF","#FFFFFF","#FF8080","#80FF80","#40C0FF","#999999","#000000"]'
    //% color.fieldOptions.columns=5
    //% color.fieldOptions.className='rgbColorPicker'
    export function RXColours(color: number): number
    {
        return color;
    }

    /**
      * Convert from RGB values to colour number
      * @param red Red value of the LED (0 to 255)
      * @param green Green value of the LED (0 to 255)
      * @param blue Blue value of the LED (0 to 255)
      */
    //% blockId="ConvertRGB" block="convert from red%red|green%green|blue%blue"
    //% weight=60
    //% subcategory=FireLeds
    //% group=Advanced
    //% blockGap=8
    export function convertRGB(r: number, g: number, b: number): number
    {
        return ((r & 0xFF) << 16) | ((g & 0xFF) << 8) | (b & 0xFF);
    }

    /**
      * Get colour number of palette at index
      * @param index index value in colour palette (0 to 24)
      */
    //% blockId="GetPaletteEntry" block="colour at palette index%index"
    //% weight=50
    //% subcategory=FireLeds
    //% group=Advanced
    //% blockGap=8
    export function getPaletteEntry(index: number): number
    {
        return palette[clamp(index, 0, 24)];
    }

// Built-in Sensors - Inputs and Outputs

// ATMEGA328 I/O Pins. 4 digital pins can be used as inputs or outputs - not available on Theta2
    /**
    * Set mode of ATMega IO Pins
    * @param pin select 0 to 3
    * @param mode Can be one of Digital In, Digital Out, Servo or PWM Out
    */
    //% blockId="SetIOMode" block="set IO mode of pin%pin|to%mode"
    //% weight=40
    //% pin.minimum=0
    //% pin.maximum=3
    //% subcategory="Inputs & Outputs"
    //% group="IO Pins"
    export function setIOMode(pin: number, mode: RXIOMode): void
    {
        let cmd = 0;
	if(! isTheta2())
	{
            switch(pin)
            {
                case 0: cmd = IO_0_CFG; break;
                case 1: cmd = IO_1_CFG; break;
                case 2: cmd = IO_2_CFG; break;
                case 3: cmd = IO_3_CFG; break;
            }
	    sendCommand2(cmd, mode);
	}
    }

    /**
    * Read ATMega IO Pin
    * @param pin select 0 to 3
    */
    //% blockId="ReadIOPin" block="read pin%pin"
    //% weight=30
    //% pin.minimum=0
    //% pin.maximum=3
    //% subcategory="Inputs & Outputs"
    //% group="IO Pins"
    export function readIOPin(pin: number): number
    {
        let cmd = 0;
        switch(pin)
        {
            case 0: cmd = INP0; break;
            case 1: cmd = INP1; break;
            case 2: cmd = INP2; break;
            case 3: cmd = INP3; break;
        }
        if((cmd != 0) && (! isTheta2()))
	    return readSensor(cmd);
        else
            return 0;
    }

    /**
    * Write ATMega IO Pin
    * @param value data to write to output pin
    * @param pin select 0 to 3
    */
    //% blockId="WriteIOPin" block="write %value|to pin%pin"
    //% weight=20
    //% pin.minimum=0
    //% pin.maximum=3
    //% subcategory="Inputs & Outputs"
    //% group="IO Pins"
    export function writeIOPin(value: number, pin: number): void
    {
        let cmd = 0;
        switch(pin)
        {
            case 0: cmd = IO_0_DATA; break;
            case 1: cmd = IO_1_DATA; break;
            case 2: cmd = IO_2_DATA; break;
            case 3: cmd = IO_3_DATA; break;
        }
        if((cmd != 0) && (! isTheta2()))
	    sendCommand2(cmd, value);
    }

// General I/O
    /**
      * Sound a buzz.
      * @param flag state of buzzer (On or Off)
      */
    //% blockId="buzz" block="turn buzzer%flag"
    //% flag.shadow="toggleOnOff"
    //% weight=100
    //% subcategory="Inputs & Outputs"
    //% group=Sensors
    export function buzz(flag: boolean): void
    {
        let buzz = flag ? 1 : 0
        if(isTheta2())
	{
	    if(flag)
		music.ringTone(262)
	    else
		music.stopAllSounds()
	}
	else
            pins.digitalWritePin(DigitalPin.P8, buzz)
    }

    /**
    * Read distance from sonar module connected to accessory connector.
    * @param unit desired conversion unit
    */
    //% blockId="ReadSonar" block="read sonar as%unit"
    //% weight=90
    //% subcategory="Inputs & Outputs"
    //% group=Sensors
    export function readSonar(unit: RXPingUnit): number
    {
        // send pulse
        let trig = DigitalPin.P12;
        let echo = DigitalPin.P12;
        let maxDistance = 2000*59; // 2m in microseconds
        let d=10;
        pins.setPull(trig, PinPullMode.PullNone);
        for (let x=0; x<10; x++)
        {
            pins.digitalWritePin(trig, 0);
            control.waitMicros(2);
            pins.digitalWritePin(trig, 1);
            control.waitMicros(10);
            pins.digitalWritePin(trig, 0);
            // read pulse
            d = pins.pulseIn(echo, PulseValue.High, maxDistance);
            if (d>0)
                break;
        }
        switch (unit)
        {
            case RXPingUnit.Centimeters: return Math.round(d / 59);
            case RXPingUnit.Inches: return Math.round(d / 149);
            default: return d;
        }
    }

    /**
      * Read line sensor in analog mode
      * @param sensor Line sensor to read.
      */
    //% blockId="ReadLine" block="%sensor|analog line sensor"
    //% weight=80
    //% subcategory="Inputs & Outputs"
    //% group=Sensors
    export function readLine(sensor: RXLineSensor): number
    {
	let channel = sensor + ALINEL
	if (sensor == 2)
	    channel = ALINEC
        return readSensor(channel)
    }

    /**
      * Read light sensor.
      * @param sensor Light sensor to read.
      */
    //% blockId="ReadLight" block="%sensor|light sensor"
    //% weight=70
    //% subcategory="Inputs & Outputs"
    //% group=Sensors
    export function readLight(sensor: RXLightSensor): number
    {
        return readSensor(sensor + LIGHTL);
    }

    /**
      * Read Dial.
      */
    //% blockId="ReadDial" block="dial"
    //% weight=60
    //% subcategory="Inputs & Outputs"
    //% group=Sensors
    export function readDial(): number
    {
        return readSensor(DIAL);
    }

    /**
      * Read Battery Voltage
      */
    //% blockId="ReadBattery" block="battery (mV)"
    //% weight=50
    //% subcategory="Inputs & Outputs"
    //% group=Sensors
    export function readBattery(): number
    {
	if(isTheta2())
	    return readSensor(PSU)
	else
            return (readSensor(PSU) - 11) * 10
    }

// EEROM Functions
    /**
      * Read EEROM
      * @param location address in Flash to read
      */
    //% blockId="ReadEEROM"
    //% block="read EEROM%location"
    //% weight=15
    //% subcategory="Inputs & Outputs"
    //% group=EEROM
    export function readEEROM(location: number): number
    {
        return rdEEROM(location + reservedBytes); // first bytes reserved for system use
    }

    /**
      * Raw Read EEROM
      * @param location address in Flash to read
      */
    //% blockId="RawReadEEROM"
    //% block="raw read EEROM%location"
    //% deprecated=true
    export function rdEEROM (location: number): number
    {
	if ((location + startFlash) <= 255)
        {
            return readSensor(location + startFlash) & 0xff
        }
        else
            return 0
    }

    /**
    * Write EEROM
    * @param value data to write (0 to 255)
    * @param location address in Flash to write
    */
    //% blockId="WriteEEROM"
    //%block="write%value|to EEROM%location"
    //% weight=10
    //% subcategory="Inputs & Outputs"
    //% group=EEROM
    export function writeEEROM(value: number, location: number): void
    {
        wrEEROM(value, location + reservedBytes); // first bytes reserved for system use
    }

    /**
    * Raw Write EEROM
    * @param value data to write (0 to 255)
    * @param location address in Flash to write
    */
    //% blockId="RawWriteEEROM"
    //% block="raw write%value|to EEROM%location"
    //% deprecated=true
    export function wrEEROM(value: number, location: number): void
    {
        let cmd = location + startFlash;
        if (cmd < 255)
        {
	    sendCommand2(cmd, value);
        }
    }



// Addon Boards

// 5x5 FireLed Matrix 

    /* create a FireLed band for the Matrix if not got one already. Default to brightness 40 */
    function mat5(): fireled.Band
    {
        if (!matrix5)
        {
            matrix5 = fireled.newBand(DigitalPin.P12, 25);
            matrix5.setBrightness(40);
        }
        return matrix5;
    }

    // update Matrix if _updateMode set to Auto
    function matUpdate(): void
    {
        if (_updateMode == RXMode.Auto)
            matShow();
    }

    /**
      * Clear all Matrix leds
      */
    //% blockId="matClear" block="Matrix clear"
    //% weight=100
    //% subcategory=Addons
    //% group="5x5 Matrix"
    //% blockGap=8
    export function matClear(): void
    {
        mat5().clearBand();
        matUpdate();
    }

    /**
      * Sets all Matrix LEDs to a given color
      * @param rgb RGB color of the LED
      */
    //% blockId="setMatrix" block="Matrix all pixels to%rgb=RXColours"
    //% weight=90
    //% subcategory=Addons
    //% group="5x5 Matrix"
    //% blockGap=8
    export function setMatrix(rgb: number)
    {
        rawSetMatrix(rgb);
        matUpdate();
    }

    function rawSetMatrix(rgb: number)
    {
        mat5().setBand(rgb);
    }

    /**
     * Set single Matrix LED to a given color
     * @param ledId linear position of the LED (0 to 24)
     * @param rgb RGB color of the LED
     */
    //% blockId="SetMatPixel" block="Matrix LED at%ledId|to%rgb=RXColours"
    //% weight=80
    //% subcategory=Addons
    //% group="5x5 Matrix"
    //% blockGap=8
    export function SetMatPixel(ledId: number, rgb: number): void
    {
        // need to map to match Microbit: top left is 0, bottom right is 24
        let x = 4 - ledId % 5;
        let y = 4 - Math.idiv(ledId, 5);
        mat5().setPixel(x + y*5, rgb);
        matUpdate();
    }

    /**
     * Set x, y position to a given color
     * @param x left/right position of the LED (0 to 4). Left is 0
     * @param y up/down position of the LED (0 to 4). Top is 0
     * @param rgb RGB color of the LED
     */
    //% blockId="setArrayPixel" block="Matrix LED at x,y%x|,%y|to%rgb=RXColours"
    //% weight=70
    //% subcategory=Addons
    //% group="5x5 Matrix"
    //% blockGap=8
    export function setArrayPixel(x: number, y: number, rgb: number): void
    {
        rawArrayPixel(x, y, rgb);
        matUpdate();
    }

    function rawArrayPixel(x: number, y: number, rgb: number): void
    {
        mat5().setPixel((4-x) + (4-y)*5, rgb);
    }

    /**
      * Shows a rainbow pattern on all Matrix LEDs
      */
    //% blockId="matRainbow" block="Matrix rainbow"
    //% weight=60
    //% subcategory=Addons
    //% group="5x5 Matrix"
    //% blockGap=8
    export function matRainbow(): void
    {
        // TODO Fix so it uses top left to bottom right
        mat5().setRainbow();
        matUpdate();
    }

    /**
      * Draw Rectangle on Matrix
      * @param x1 x position to start
      * @param y1 y position to start
      * @param x2 x position to end
      * @param y2 y position to end
      * @param rgb colour to draw with
      * @param fill selct to fill in area
      */
    //% blockId="matRectangle"
    //% block="Matrix rectangle from x,y%x1|,%y1|to x,y%x2|,%y2 in%rgb=RXColours|fill%fill"
    //% subcategory=Addons
    //% group="5x5 Matrix"
    //% weight=50
    //% inlineInputMode=inline
    //% fill.shadow="toggleYesNo"
    //% blockGap=8
    export function matRectangle(x1: number, y1: number, x2: number, y2: number, rgb: number, fill: boolean)
    {
        for (let x=x1; x <= x2; x++)
        {
            for (let y=y1; y <= y2; y++)
            {
                if (inRange(x, y) && (x==x1 || x==x2 || y==y1 || y==y2 || fill))
                    rawArrayPixel(x, y, rgb);
            }
        }
        matUpdate();
    }

    /* check x, y is within range */
    function inRange(x: number, y: number): boolean
    {
        return (x>=0 && x<5 && y>=0 && y<5);
    }

    /**
      * Shows an Eyeball on the Matrix
      * @param pos position of pupil (up, down, left, etc)
      * @param rgb colour of image
      * @param size size of pupil. Small or Large
      */
    //% blockId="matShowEyeball" block="Matrix eyeball%pos|in%rgb=RXColours|%size"
    //% weight=50
    //% subcategory=Addons
    //% group="5x5 Matrix"
    //% blockGap=8
    export function matShowEyeball(pos: eyePos, rgb: number, size: eyeSize): void
    {
        rawSetMatrix(rgb);
        // Clear corners to make a circle-ish
        rawArrayPixel(0, 0, 0);
        rawArrayPixel(0, 4, 0);
        rawArrayPixel(4, 0, 0);
        rawArrayPixel(4, 4, 0);
        // draw pupil
        switch(pos)
        {
            case eyePos.Forward:
                (size==eyeSize.Small) ? rawArrayPixel(2,2,0) : pupil5(2,2); break;
            case eyePos.Down:
                (size==eyeSize.Small) ? rawArrayPixel(2,3,0) : pupil5(2,3); break;
            case eyePos.Up:
                (size==eyeSize.Small) ? rawArrayPixel(2,1,0) : pupil5(2,1); break;
            case eyePos.Left:
                (size==eyeSize.Small) ? rawArrayPixel(3,2,0) : pupil5(3,2); break;
            case eyePos.Right:
                (size==eyeSize.Small) ? rawArrayPixel(1,2,0) : pupil5(1,2); break;
            case eyePos.DownLeft:
                (size==eyeSize.Small) ? rawArrayPixel(3,3,0) : pupil4(2,2); break;
            case eyePos.DownRight:
                (size==eyeSize.Small) ? rawArrayPixel(1,3,0) : pupil4(1,2); break;
            case eyePos.UpLeft:
                (size==eyeSize.Small) ? rawArrayPixel(3,1,0) : pupil4(2,1); break;
            case eyePos.UpRight:
                (size==eyeSize.Small) ? rawArrayPixel(1,1,0) : pupil4(1,1); break;
        }
        matUpdate();
    }
 
     function pupil5(x: number, y: number)
     {
        rawArrayPixel(x, y, 0);
        rawArrayPixel(x+1, y, 0);
        rawArrayPixel(x-1, y, 0);
        rawArrayPixel(x, y+1, 0);
        rawArrayPixel(x, y-1, 0);
    }

     function pupil4(x: number, y: number)
     {
         rawArrayPixel(x, y, 0);
         rawArrayPixel(x+1, y, 0);
         rawArrayPixel(x, y+1, 0);
         rawArrayPixel(x+1, y+1, 0);
     }

    /**
      * Shows an Image on the Matrix
      * @param myImage image to show
      * @param rgb colour of image
      */
    //% blockId="showImage" block="Matrix image%myImage|in%rgb=RXColours"
    //% weight=40
    //% subcategory=Addons
    //% group="5x5 Matrix"
    //% blockGap=8
    export function matShowImage(myImage: Image, rgb: number): void
    {
        //myImage.showImage(0);
        for (let i=0; i<5; i++)
        {
            for (let j=0; j<5; j++)
            {
                if (myImage.pixel(i, j))
                    rawArrayPixel(i, j, rgb);
            }
        }
        matUpdate();
    }


    /**
      * Show changes on Matrix
      */
    //% blockId="matShow" block="Matrix show changes"
    //% weight=30
    //% subcategory=Addons
    //% group="5x5 Matrix"
    //% blockGap=8
    export function matShow(): void
    {
        if (btDisabled)
            mat5().updateBand();
    }

    /**
     * Set the brightness of the Matrix
     * @param brightness a measure of LED brightness in 0-255. eg: 40
     */
    //% blockId="matBrightness" block="set Matrix brightness%brightness"
    //% brightness.min=0 brightness.max=255
    //% weight=20
    //% subcategory=Addons
    //% group="5x5 Matrix"
    //% blockGap=8
    export function matBrightness(brightness: number): void
    {
        mat5().setBrightness(brightness);
        matUpdate();
    }

// BitFace Addon
    /* create a FireLed band for the BitFace if not got one already. Default to brightness 40 */
    function bitf(): fireled.Band
    {
        if (!bitface)
        {
            bitface = fireled.newBand(DigitalPin.P12, 17);
            bitface.setBrightness(40);
        }
        return bitface;
    }

    function bitfUpdate(): void
    {
        if (btDisabled)
            bitf().updateBand();
    }

    function drawMouth(myList: number[], rgb: number)
    {
        for (let i=0; i<14; i++)
            bitf().setPixel(i, 0);
        for (let i=0; i<myList.length; i++)
            bitf().setPixel(myList[i], rgb);
    }

    /**
      * Sets all Bitface LEDs to a given color
      * @param rgb RGB color of the LED
      */
    //% blockId="setBitFace"
    //% block="set BitFace to%rgb=RXColours"
    //% weight=100
    //% subcategory=Addons
    //% group="BitFace"
    //% blockGap=8
    export function setBitface(rgb: number)
    {
        bitf().setBand(rgb);
        bitfUpdate();
    }

    /**
      * Set BitFace eye(s) to selected colour
      * @param eye select the eye(s) to set
      * @param rgb colour to set
      */
    //% blockId="setBitEye"
    //% block="set BitFace%eye|eye(s) to%rgb=RXColours"
    //% weight=90
    //% subcategory=Addons
    //% group="BitFace"
    //% blockGap=8
    export function setBitEye(eye: bfEyes, rgb: number)
    {
        if (eye == bfEyes.Left || eye == bfEyes.Both)
            bitf().setPixel(15, rgb);
        if (eye == bfEyes.Right || eye == bfEyes.Both)
            bitf().setPixel(16, rgb);
        bitfUpdate();
    }

    /**
      * Set BitFace nose to selected colour
      * @param rgb colour to set
      */
    //% blockId="setBitNose"
    //% block="set BitFace nose to%rgb=RXColours"
    //% weight=80
    //% subcategory=Addons
    //% group="BitFace"
    //% blockGap=8
    export function setBitNose(rgb: number)
    {
        bitf().setPixel(14, rgb);
        bitfUpdate();
    }

    /**
      * Set BitFace mouth to selected style and colour
      * @param mouth style of mouth. eg: smile
      * @param rgb colour to set
      */
    //% blockId="setBitMouth"
    //% block="set BitFace mouth to%mouth|with%rgb=RXColours"
    //% weight=70
    //% subcategory=Addons
    //% group="BitFace"
    //% blockGap=8
    export function setBitMouth(mouth: bfMouth, rgb: number)
    {
        switch (mouth)
        {
            case bfMouth.Smile: drawMouth(mouthSmile, rgb); break;
            case bfMouth.Grin: drawMouth(mouthGrin, rgb); break;
            case bfMouth.Sad: drawMouth(mouthSad, rgb); break;
            case bfMouth.Frown: drawMouth(mouthFrown, rgb); break;
            case bfMouth.Straight: drawMouth(mouthStraight, rgb); break;
            case bfMouth.Oooh: drawMouth(mouthOooh, rgb); break;
            case bfMouth.Eeeh: drawMouth(mouthEeeh, rgb); break;
        }
        bitfUpdate();
    }

    /**
     * Set the brightness of the BitFace
     * @param brightness a measure of LED brightness in 0-255. eg: 40
     */
    //% blockId="bitBrightness" block="set BitFace brightness%brightness"
    //% brightness.min=0 brightness.max=255
    //% weight=60
    //% subcategory=Addons
    //% group="BitFace"
    //% blockGap=8
    export function bitBrightness(brightness: number): void
    {
        bitf().setBrightness(brightness);
        bitfUpdate();
    }

// OLED 128x64 Addon

    /* create a new OLED object if needed */
    function oScreen(): firescreen.Screen
    {
        if (!oled)
        {
            oled = firescreen.newScreen(0x3c);
        }
        return oled;
    }

    /**
      * Show Text on OLED
      * @param text text string to display eg: 'Hello!'
      * @param x x position to start
      * @param y y position to start
      * @param inv inverse or normal text eg: false
      */
    //% blockId="OledText"
    //% block="OLED text%text|at x,y%x|,%y|inverse%inv"
    //% subcategory=Addons
    //% group="OLED 128x64"
    //% weight=100
    //% inlineInputMode=inline
    //% inv.shadow="toggleYesNo"
    //% blockGap=8
    export function oledText(text: string, x: number, y: number, inv: boolean)
    {
        oScreen().doText(text, x, y, inv);
    }

    /**
      * Show Number on OLED
      * @param num number to display eg: 100
      * @param x x position to start
      * @param y y position to start
      * @param inv inverse or normal text eg: false
      */
    //% blockId="OledNumber"
    //% block="OLED number%num|at x,y%x|,%y|inverse%inv"
    //% subcategory=Addons
    //% group="OLED 128x64"
    //% weight=90
    //% inlineInputMode=inline
    //% inv.shadow="toggleYesNo"
    //% blockGap=8
    export function oledNumber(num: number, x: number, y: number, inv: boolean)
    {
        oScreen().doNumber(num, x, y, inv);
    }

    /**
      * Update OLED from buffer
      */
    //% blockId="OledUpdate"
    //% block="OLED update"
    //% subcategory=Addons
    //% group="OLED 128x64"
    //% weight=80
    //% blockGap=8
    export function oledUpdate()
    {
        oScreen().updateScreen();
    }

    /**
      * Set Oled all White or all Black
      * @param set all OLED pixels on or off. eg: false
      */
    //% blockId="OledSet"
    //% block="OLED all pixels%set"
    //% set.shadow="toggleOnOff"
    //% subcategory=Addons
    //% group="OLED 128x64"
    //% weight=80
    //% blockGap=8
    export function oledSet(set: boolean)
    {
        oScreen().setScreen(set);
    }

    /**
      * Invert display colours Black <-> White
      * @param inv inverse video: eg: true
      */
    //% blockId="OledInvert" block="OLED invert text%inv"
    //% inv.shadow="toggleOnOff"
    //% subcategory=Addons
    //% group="OLED 128x64"
    //% weight=70
    //% blockGap=8
    export function oledInvert(inv: boolean)
    {
        oScreen().invertOled(inv);
    }

    /**
      * Zoom display
      * @param zoom zoomed text: eg: true
      */
    //% blockId="OledZoom" block="OLED zoom%zoom"
    //% zoom.shadow="toggleYesNo"
    //% subcategory=Addons
    //% group="OLED 128x64"
    //% weight=60
    //% blockGap=8
    export function oledZOOM(zoom: boolean)
    {
        oScreen().zoomOled(zoom);
    }

    /**
      * Plot pixel on OLED
      * @param x x position to plot
      * @param y y position to plot
      * @param doSet on or off. eg: true
      * @param update set true to show immediately on screen. requires updateOled otherwise. eg: true
      */
    //% blockId="OledPlotPixel"
    //% block="OLED pixel at x,y%x|,%y|to%doSet|with update%update"
    //% doSet.shadow="toggleOnOff"
    //% update.shadow="toggleYesNo"
    //% subcategory=Addons
    //% group="OLED 128x64"
    //% weight=50
    //% inlineInputMode=inline
    //% blockGap=8
    export function oledPlotPixel(x: number, y: number, doSet: boolean, update: boolean)
    {
        oScreen().plotPixel(x, y, doSet, update);
    }

    /**
      * draw a line from x1,y1 to x2,y2
      * @param x1 x start
      * @param y1 y start
      * @param x2 x end
      * @param y2 y end
      * @param doSet set or clear. eg: true
      * @param update set true to show immediately on screen. requires updateOled otherwise. eg: true
      */
    //% blockId="OledLine" block="OLED line from x,y%x1|,%y1|to x,y%x2|,%y2|set%doSet|update%update"
    //% inlineInputMode=inline
    //% doSet.shadow="toggleOnOff"
    //% update.shadow="toggleYesNo"
    //% subcategory=Addons
    //% group="OLED 128x64"
    //% weight=45
    //% inlineInputMode=inline
    //% blockGap=8
    export function oledLine(x1: number, y1: number, x2: number, y2: number, doSet: boolean, update: boolean)
    {
        oScreen().oledLine(x1, y1, x2, y2, doSet, update);
    }

    /**
      * draw a rectangle
      * @param x1 x start
      * @param y1 y start
      * @param x2 x finish
      * @param y2 y finish
      * @param doSet set or clear. eg: true
      * @param update set true to show immediately on screen. requires updateOled otherwise. eg: true
      */
    //% blockId="OledRectangle" block="OLED rectangle from x,y%x1|,%y1|to x,y%x2|,%y2|set%doSet|update%update"
    //% inlineInputMode=inline
    //% doSet.shadow="toggleOnOff"
    //% update.shadow="toggleYesNo"
    //% subcategory=Addons
    //% group="OLED 128x64"
    //% weight=30
    //% inlineInputMode=inline
    //% blockGap=8
    export function oledRectangle(x1: number, y1: number, x2: number, y2: number, doSet: boolean, update: boolean)
    {
        oScreen().oledRect(x1, y1, x2, y2, doSet, update);
    }

    /**
      * draw a circle
      * @param x x centre. eg: 60
      * @param y y centre. eg: 30
      * @param r radius. eg: 20
      * @param doSet set or clear. eg: true
      * @param update set true to show immediately on screen. Requires updateOled otherwise. eg: true
      */
    //% blockId="OledCircle" block="OLED circle at x,y%x|,%y|radius%r|set%doSet|update%update"
    //% inlineInputMode=inline
    //% doSet.shadow="toggleOnOff"
    //% update.shadow="toggleYesNo"
    //% subcategory=Addons
    //% group="OLED 128x64"
    //% weight=30
    //% inlineInputMode=inline
    //% blockGap=8
    export function oledCircle (x: number, y: number, r: number, doSet: boolean, update: boolean)
    {
        oScreen().oledCircle(x, y, r, doSet, update);
    }

}
