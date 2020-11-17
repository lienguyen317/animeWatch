module Api
    module V1
        class AnimesController < ApplicationController
            # fixed post route issues 
            protect_from_forgery with: :null_session
            
            def index
                animes = Anime.all 

                render json: AnimeSerializer.new(animes, options).serialized_json
            end

            def show
                anime = Anime.find_by(slug: params[:slug])

                render json: AnimeSerializer.new(anime, options).serialized_json
            end

            def create
                anime = Anime.new(anime_params)

                if anime.save
                    render json: AnimeSerializer.new(anime).serialized_json
                else
                    render json: { error: anime.errors.messages }, status: 422
                end
            end

            def update
                anime = Anime.find_by(slug: params[:slug])

                if anime.update(anime_params)
                    render json: AnimeSerializer.new(anime, options).serialized_json
                else
                    render json: { error: anime.errors.messages }, status: 422
                end
            end

            def destroy
                anime =Anime.find_by(slug: params[:slug])

                if anime.destroy
                    head :no_content
                else
                    render json: { error: anime.errors.messages }, status: 422
                end
            end

            private

            def anime_params
                params.require(:anime).permit(:name, :image_url)
            end

            def options
                @options ||= { include: %i[reviews] }
            end
        
        end
    end
end
