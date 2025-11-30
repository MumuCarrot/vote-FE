import { axiosInstance } from './axiosConfig';

class VoteService {
    async request(endpoint, options = {}) {
        try {
            const response = await axiosInstance({
                url: endpoint,
                method: options.method || 'GET',
                data: options.data,
                ...options,
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async getVotes() {
        return this.request('/votes');
    }

    async getVoteById(voteId) {
        return this.request(`/votes/${voteId}`);
    }

    async participateInVote(voteId, optionId) {
        return this.request(`/votes/${voteId}/participate`, {
            method: 'POST',
            data: { optionId },
        });
    }

    async createVote(voteData) {
        return this.request('/votes', {
            method: 'POST',
            data: voteData,
        });
    }

    async updateVote(voteId, voteData) {
        return this.request(`/votes/${voteId}`, {
            method: 'PUT',
            data: voteData,
        });
    }

    async deleteVote(voteId) {
        return this.request(`/votes/${voteId}`, {
            method: 'DELETE',
        });
    }
}

const voteService = new VoteService();
export default voteService;

