// 환경 변수(.env)를 등록하기 위해서는 process.env.<KEY>를 사용하세요.

export default {
  /* 디스코드 봇 토큰 */
  discordToken: "",

  /* 슬래시 커맨드 설정 */
  slashCommand: {
    /* 명령어를 등록할 서버 ID (Snowflake), 모든 서버에 등록하려면 삭제(또는 undefined로 지정) */
    guilds: undefined,
  },

  /* 메시지 커맨드 접두사, 없다면 기본값: ["모카야 "] */
  prefix: ["모카야 "],
};
