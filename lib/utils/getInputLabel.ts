export const getInputLabel = (type: string) => {
  let label;
  switch (type) {
    case 'email':
      label = '이메일';
      break;
    case 'password':
      label = '비밀번호';
      break;
    case 'passwordConfirm':
      label = '비밀번호 확인';
      break;
    case 'title':
      label = '제목';
      break;
    case 'dueDate':
      label = '마감일';
      break;
    case 'tag':
      label = '태그';
      break;
    case 'nickname':
      label = '닉네임';
      break;
    default:
      label = '';
      break;
  }
  return label;
};
