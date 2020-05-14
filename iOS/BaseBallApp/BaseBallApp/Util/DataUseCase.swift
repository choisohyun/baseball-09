//
//  DataUseCase.swift
//  BaseBallApp
//
//  Created by 임승혁 on 2020/05/10.
//  Copyright © 2020 임승혁. All rights reserved.
//

import Foundation

class DataUseCase {
    private let basicEndPoint = "http://18.213.230.151/api/"
    private let gameList = "main"
    private let teamSelect = "team"
    private let gameProgress = "game/"
    private let pitch = "pitch"
    
    func loadTeamList(manager: NetworkManager, completion: @escaping (MainGameList) -> ()) {
        manager.requestData(url: basicEndPoint + gameList, method: .get, contentType: nil, body: nil) { (data, error) in
            guard let data = data else { return }
            do {
                let json = try JSONDecoder().decode(MainGameList.self, from: data)
                completion(json)
            } catch {
                print(error)
            }
        }
    }
    
    func isTeamSelect(manager: NetworkManager, selectTeamId: Int, completion: @escaping (Bool) -> ()) {
        let requestJson = ["id": selectTeamId, "isSelected": true] as [String : Any]
        let jsonData = try! JSONSerialization.data(withJSONObject: requestJson)
        
        manager.requestData(url: basicEndPoint + teamSelect, method: .post, contentType: "application/json", body: jsonData) { (data, error) in
            guard let data = data else { return }
            do {
                let json = try JSONDecoder().decode(TeamSelectResult.self, from: data)
                DispatchQueue.main.async {
                    completion(json.success)
                }
            } catch {
                print("error : \(error)")
            }
        }
    }
    
    func requestGameProgress(manager: NetworkManager, gameId: Int, completion: @escaping (GameTotalInfo) -> ()) {
        manager.requestData(url: basicEndPoint + gameProgress + "\(gameId)", method: .get, contentType: nil, body: nil) { (data, error) in
            guard let data = data else { return }
            do {
                let json = try JSONDecoder().decode(GameProgressInfo.self, from: data)
                completion(json.response)
            } catch {
                print("error: \(error)")
            }
        }
    }
    
    func pitchingAction(manager: NetworkManager, completion: @escaping (String) -> ()) {
        manager.requestData(url: basicEndPoint + pitch, method: .post, contentType: nil, body: nil) { (data, error) in
            guard let data = data else { return }
            do {
                let json = try JSONDecoder().decode(PitchingResult.self, from: data)
                completion(json.response)
            } catch {
                print("error: \(error)")
            }
        }
    }
}