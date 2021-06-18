import * as Util from '../util.js'

const queue = new Map();

export const play = async ({message, client, args, self}) => {
  
  
  
  if(message.member.voice.channel) {
		const connection = await message.member.voice.channel.join();
	
    const dispatcher = connection.play('https://stevebeeblebrox.github.io/assets/audio/CrystalForest.mp3');
    dispatcher.on('start', () => {
      console.log('Playing audio');
    });

    dispatcher.on('finish', () => {
      console.log('Finished playing!');
      dispatcher.destroy();
    });

    dispatcher.on('error', console.error);
  

  }
}

export const skip = () => {}
export const stop = () => {}