import {default as axios} from 'utils/axiosHandler';

const POST_URL = '/api/v1/posts';

// [1 게시판] 게시글 리스트 읽기(get)
export const getPostList = async () => axios.get(POST_URL);

// [2 게시글 작성] Todo: 게시글 생성(post)
export const createPost = async (params) => axios.post(POST_URL, params); // export const createPost = 작성해주세요.

// [3 게시글 상세] 게시글 읽기(get)정
export const getPost = async ({id}) => axios.get(`${POST_URL}/${id}`);

// [3 게시글 상세] Todo: 게시글 지우기(delete)
export const deletePost = async ({id}) => axios.delete(`${POST_URL}/${id}`); // export const deletePost = 작성해주세요.

// [4 게시글 수정] Todo: 게시글 수정(put)
export const updatePost = async ({id}, params) =>
	axios.put(`${POST_URL}/${id}`, params); // export const updatePost = 작성해주세요.
