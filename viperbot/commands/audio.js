import * as Util from '../util.js'

import ytdl from 'ytdl-core'

const queue = new Map();

export const play = async ({message, client, args, self}) => {
  
  Util.assertPermission(message.member, ['PRIORITY_SPEAKER', 'STREAM', 'CONNECT', 'SPEAK'], self)
  
  if(message.member.voice.channel) {
		const connection = await message.member.voice.channel.join();
    const source = args[0]

    const bitrate = 96*1000

    const dispatcher = source.endsWith('.mp3') ? connection.play(source, {
      bitrate
    }) : connection.play(ytdl(source, {
      filter: 'audioonly'
    }), {
      bitrate
    })//('https://stevebeeblebrox.github.io/assets/audio/CrystalForest.mp3');

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